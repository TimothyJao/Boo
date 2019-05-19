import Mario from "./mario"
import Boo from "./boo"
import {GAME_WIDTH, GAME_HEIGHT, SPAWN_RANGE, IMAGES} from "./constants"

export default class Game {
    constructor() {
        this.mario = new Mario();
        this.boos = [];
        this.maxGhosts = 20;
        this.addBoo();
        this.darknessCounter = 0;
        this.booRandomPosition = this.booRandomPosition.bind(this)
        this.dead = false;
        this.checkCollisions = this.checkCollisions.bind(this)
        this.trueDarkness = this.trueDarkness.bind(this)
        this.flashlight = this.flashlight.bind(this)
        this.lightRange = {};
        this.browserScaler = 0;
    }

    addBoo(){
        if (!this.dead){
            if (this.boos.length > this.maxGhosts){
                let randGhost = Math.floor(Math.random()*this.maxGhosts)
                this.boos.splice(randGhost, 1)
            }
            this.boos.push(new Boo(this.booRandomPosition()));
        }
    }

    booRandomPosition(){
        let booX = Math.floor(Math.random()*GAME_WIDTH);
        let booY = Math.floor(Math.random() * GAME_HEIGHT);
        let booPos = [booX, booY]
        if ((this.mario.pos[0] >= (booX - SPAWN_RANGE) && this.mario.pos[0] <= (booX + SPAWN_RANGE)) ||
            (this.mario.pos[1] >= (booY - SPAWN_RANGE) && this.mario.pos[1] <= (booY + SPAWN_RANGE))){
            booPos = this.booRandomPosition();
        }
        return booPos;
    }

    draw(ctx){
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "#888888";
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
        ctx.drawImage(this.mario.image(), this.mario.pos[0], this.mario.pos[1])
        for (let i = 0; i < this.boos.length; i++) {
            let boo = this.boos[i];
            boo.nextMove(this.mario, !this.dead);
            ctx.drawImage(boo.image(), boo.pos[0], boo.pos[1]);
        } 
        if (!this.dead){
            this.drawDarkness(ctx)
        } 
        else if(this.dead && this.darknessCounter < 50){
            this.trueDarkness(ctx)
        }
        else if(this.dead && this.darknessCounter >= 50 && this.browserScaler < 3){
            this.gameOverScreen(ctx)
        }
    }

    drawDarkness(ctx){
        let marioX = this.mario.pos[0] + 14;
        let marioY = this.mario.pos[1] + 20;
        ctx.beginPath();
        ctx.arc(marioX, marioY, 100, 0, 2 * Math.PI, true);
        ctx.moveTo(marioX, marioY)
        this.flashlight(ctx)
        ctx.rect(GAME_WIDTH, GAME_HEIGHT, -GAME_WIDTH, -GAME_HEIGHT);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        let grd = ctx.createRadialGradient(marioX, marioY, 50, marioX, marioY, 120);
        grd.addColorStop(0, "transparent");
        grd.addColorStop(1, "black");
        ctx.fillStyle = grd
        ctx.moveTo(marioX, marioY)
        this.flashlight2(ctx);
        ctx.fill();
        ctx.closePath();
    }

    trueDarkness(ctx){
        this.darknessCounter += .5;
        let marioX = this.mario.pos[0] + 14;
        let marioY = this.mario.pos[1] + 20;
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(marioX, marioY, 100, 0, 2 * Math.PI);
        ctx.rect(GAME_WIDTH, 0, -GAME_WIDTH, GAME_HEIGHT);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        let grd = ctx.createRadialGradient(marioX, marioY, 50-this.darknessCounter, marioX, marioY, 100-this.darknessCounter*2);
        grd.addColorStop(0, "transparent");
        grd.addColorStop(1, "black");
        ctx.fillStyle = grd
        ctx.arc(marioX, marioY, 120, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    gameOverScreen(ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        let image = IMAGES.game_over[0]
        let newWidth = image.width * this.browserScaler;
        let newHeight = image.height*this.browserScaler
        ctx.drawImage(image, GAME_WIDTH / 2 - newWidth / 2, GAME_HEIGHT / 2 - newHeight / 2, newWidth, newHeight)
        this.browserScaler += .01;
    }

    flashlight(ctx){
        let marioX = this.mario.pos[0] + 14;
        let marioY = this.mario.pos[1] + 20;
        let mario1X;
        let mario1Y;
        let mario2X;
        let mario2Y;
        if (this.mario.direction === "down") {
            mario1X = marioX - Math.tan(22.5 * Math.PI / 180) * 200;
            mario1Y = marioY + 200
            mario2X = marioX + Math.tan(22.5 * Math.PI / 180) * 200
            mario2Y = marioY + 200
            ctx.lineTo(mario1X, mario1Y)
            ctx.lineTo(mario2X, mario2Y)
            ctx.moveTo(marioX, marioY)
            ctx.arc(marioX, marioY, 100, 3 * Math.PI / 8, 5 * Math.PI / 8);
        }
        else if (this.mario.direction === "downright") {
            mario1X = marioX + Math.tan(22.5 * Math.PI / 180) * 200;
            mario1Y = marioY + 200
            mario2X = marioX + 200
            mario2Y = marioY + Math.tan(22.5 * Math.PI / 180) * 200
            ctx.lineTo(mario1X, mario1Y)
            ctx.lineTo(mario2X, mario2Y)
            ctx.moveTo(marioX, marioY)
            ctx.arc(marioX, marioY, 100, Math.PI / 8, 3 * Math.PI / 8);
        }
        else if (this.mario.direction === "right") {
            mario1X = marioX + 200;
            mario1Y = marioY + Math.tan(22.5 * Math.PI / 180) * 200;
            mario2X = marioX + 200
            mario2Y = marioY - Math.tan(22.5 * Math.PI / 180) * 200
            ctx.lineTo(mario1X, mario1Y)
            ctx.lineTo(mario2X, mario2Y)
            ctx.moveTo(marioX, marioY)
            ctx.arc(marioX, marioY, 100, 15 * Math.PI / 8, Math.PI / 8);
        }
        else if (this.mario.direction === "upright") {
            mario1X = marioX + 200;
            mario1Y = marioY - Math.tan(22.5 * Math.PI / 180) * 200;
            mario2X = marioX + Math.tan(22.5 * Math.PI / 180) * 200
            mario2Y = marioY - 200
            ctx.lineTo(mario1X, mario1Y)
            ctx.lineTo(mario2X, mario2Y)
            ctx.moveTo(marioX, marioY)
            ctx.arc(marioX, marioY, 100, 13 * Math.PI / 8, 15*Math.PI / 8);
        }
        else if (this.mario.direction === "up") {
            mario1X = marioX + Math.tan(22.5 * Math.PI / 180) * 200;
            mario1Y = marioY - 200
            mario2X = marioX - Math.tan(22.5 * Math.PI / 180) * 200
            mario2Y = marioY - 200
            ctx.lineTo(mario1X, mario1Y)
            ctx.lineTo(mario2X, mario2Y)
            ctx.moveTo(marioX, marioY)
            ctx.arc(marioX, marioY, 100, 11 * Math.PI / 8, 13 * Math.PI / 8);
        }
        else if (this.mario.direction === "upleft") {
            mario1X = marioX - Math.tan(22.5 * Math.PI / 180) * 200;
            mario1Y = marioY - 200
            mario2X = marioX - 200
            mario2Y = marioY - Math.tan(22.5 * Math.PI / 180) * 200
            ctx.lineTo(mario1X, mario1Y)
            ctx.lineTo(mario2X, mario2Y)
            ctx.moveTo(marioX, marioY)
            ctx.arc(marioX, marioY, 100, 9 * Math.PI / 8, 11 * Math.PI / 8);
        }
        else if (this.mario.direction === "left") {
            mario1X = marioX - 200;
            mario1Y = marioY - Math.tan(22.5 * Math.PI / 180) * 200
            mario2X = marioX - 200
            mario2Y = marioY + Math.tan(22.5 * Math.PI / 180) * 200
            ctx.lineTo(mario1X, mario1Y)
            ctx.lineTo(mario2X, mario2Y)
            ctx.moveTo(marioX, marioY)
            ctx.arc(marioX, marioY, 100, 7 * Math.PI / 8, 9 * Math.PI / 8);
        }
        else if (this.mario.direction === "downleft") {
            mario1X = marioX - 200
            mario1Y = marioY + Math.tan(22.5 * Math.PI / 180) * 200
            mario2X = marioX - Math.tan(22.5 * Math.PI / 180) * 200
            mario2Y = marioY + 200
            ctx.lineTo(mario1X, mario1Y)
            ctx.lineTo(mario2X, mario2Y)
            ctx.moveTo(marioX, marioY)
            ctx.arc(marioX, marioY, 100, 5 * Math.PI / 8, 7 * Math.PI / 8);
        }
        this.lightRange = { "point1": [marioX, marioY], "point2": [mario1X, mario1Y], "point3": [mario2X, mario2Y]}
    }

    flashlight2(ctx){
        let marioX = this.mario.pos[0] + 14;
        let marioY = this.mario.pos[1] + 20;
        if (this.mario.direction === "down") {
            ctx.arc(marioX, marioY, 100, 3 * Math.PI / 8, 5 * Math.PI / 8, true);
        }
        else if (this.mario.direction === "downright") {
            ctx.arc(marioX, marioY, 100, Math.PI / 8, 3 * Math.PI / 8, true);
        }
        else if (this.mario.direction === "right") {
            ctx.arc(marioX, marioY, 100, 15 * Math.PI / 8, Math.PI / 8, true);
        }
        else if (this.mario.direction === "upright") {
            ctx.arc(marioX, marioY, 100, 13 * Math.PI / 8, 15 * Math.PI / 8, true);
        }
        else if (this.mario.direction === "up") {
            ctx.arc(marioX, marioY, 100, 11 * Math.PI / 8, 13 * Math.PI / 8, true);
        }
        else if (this.mario.direction === "upleft") {
            ctx.arc(marioX, marioY, 100, 9 * Math.PI / 8, 11 * Math.PI / 8, true);
        }
        else if (this.mario.direction === "left") {
            ctx.arc(marioX, marioY, 100, 7 * Math.PI / 8, 9 * Math.PI / 8, true);
        }
        else if (this.mario.direction === "downleft") {
            ctx.arc(marioX, marioY, 100, 5 * Math.PI / 8, 7 * Math.PI / 8, true);
        }
    }

    checkInLight(point){
        let point1 = this.lightRange.point1
        let point2 = this.lightRange.point2
        let point3 = this.lightRange.point3

        let mainArea = this.triangleArea(point1, point2, point3)

        let area1 = this.triangleArea(point1, point2, point);
        let area2 = this.triangleArea(point1, point3, point);
        let area3 = this.triangleArea(point2, point3, point);
        return (mainArea === area1 + area2 + area3)
    }

    triangleArea(point1, point2, point3){
        let area = (point1[0]*(point2[1]-point3[1]) + point2[0]*(point3[1]-point1[1]) + point3[0]*(point1[1]-point2[1]))/2
        return Math.abs(area)
    }

    moveObjects(){
        for (let i = 0; i < this.allObjects().length; i++){
            this.allObjects()[i].move()
        }
    }

    checkCollisions(){
        for(let i = 0; i<this.boos.length; i++){
            if(this.boos[i].checkCollision(this.mario)){
                this.gameOver()
            }
            if (this.checkInLight(this.boos[i].pos)){
                this.boos[i].hide();
            }
        }
    }

    step(){
        this.moveObjects();
        this.checkCollisions();
    }

    allObjects(){
        let arr = Object.assign([], this.boos)
        arr.push(this.mario);
        return arr
    }

    gameOver(){
        this.mario.vel=[0,0]
        this.dead = true;
    }
}
