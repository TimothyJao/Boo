import Mario from "./mario"
import Boo from "./boo"
import {GAME_WIDTH, GAME_HEIGHT, SPAWN_RANGE, IMAGES, MAXGHOSTS} from "./constants"
import {flashlight, flashlightShadow, checkInLight} from "./flashlight"

export default class Game {
    constructor() {
        this.mario = new Mario();
        this.boos = [];
        this.darknessCounter = 0;
        this.dead = false;
        this.lightRange = {};
        this.browserScaler = 0;
        this.score = 0;
        this.gameOverChange = false;
        this.booRandomPosition = this.booRandomPosition.bind(this)
        this.checkCollisions = this.checkCollisions.bind(this)
        this.drawDarkness = this.drawDarkness.bind(this)
        this.trueDarkness = this.trueDarkness.bind(this)
    }

    addBoo(){
        if (!this.dead){
            if (this.boos.length > MAXGHOSTS){
                let randGhost = Math.floor(Math.random() * MAXGHOSTS)
                this.boos.splice(randGhost, 1)
            }
            this.boos.push(new Boo(this.booRandomPosition()));
        }
    }

    booRandomPosition(){
        let booX = Math.floor(Math.random() * GAME_WIDTH);
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
            this.drawScore(ctx)
            this.drawFlashlightBar(ctx)
        } 
        else if(this.dead && this.darknessCounter < 50){
            this.trueDarkness(ctx)
        }
        else if(this.darknessCounter >= 50 && this.browserScaler < 1.3){
            this.gameOverScreen(ctx)
        }
        if (this.browserScaler >= 1.3){
            this.gameOverChange = true;
        }
    }

    drawScore(ctx){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 4;
        ctx.font = "20x SuperMario256"
        ctx.fillText("Score:", GAME_WIDTH-100 , 30);
        ctx.fillText(this.score, GAME_WIDTH - 100, 60);
        ctx.shadowBlur = 0;
        ctx.closePath();
    }

    drawFlashlightBar(ctx){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 4;
        ctx.font = "20x SuperMario256"
        ctx.fillText("Flashlight:", GAME_WIDTH - 100, 100);
        ctx.shadowBlur = 0;
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(GAME_WIDTH - 120, 130, GAME_WIDTH - 160, 150)
        ctx.closePath();
    }

    drawDarkness(ctx){
        let marioX = this.mario.pos[0] + 14;
        let marioY = this.mario.pos[1] + 20;
        ctx.beginPath();
        ctx.arc(marioX, marioY, 100, 0, 2 * Math.PI, true);
        ctx.moveTo(marioX, marioY)
        if(this.mario.flashLightOn) {this.lightRange = flashlight(ctx, false, this.mario)}
        ctx.rect(GAME_WIDTH, GAME_HEIGHT, -GAME_WIDTH, -GAME_HEIGHT);
        ctx.fillStyle = "black";
        ctx.fill();
        let grd = ctx.createRadialGradient(marioX, marioY, 50, marioX, marioY, 120);
        grd.addColorStop(0, "transparent");
        grd.addColorStop(1, "black");
        ctx.fillStyle = grd
        ctx.moveTo(marioX, marioY)
        if (this.mario.flashLightOn) {
            flashlightShadow(ctx, this.mario);
        } else{
            ctx.arc(marioX, marioY, 100, 0, 2 * Math.PI, );
        }
        ctx.fill();
        ctx.closePath();
        ctx.beginPath()
        if(this.mario.flashLightOn){
            let grd = ctx.createLinearGradient(marioX, marioY, 150, 0);
            grd.addColorStop(0, "rgba(255, 255, 220, 0.2)");
            grd.addColorStop(1, "rgba(0, 0, 0, 0.2)");
            ctx.moveTo(marioX, marioY)
            this.lightRange = flashlight(ctx, true, this.mario);
            ctx.fillStyle = "rgba(255, 255, 200, 0.4)";
            ctx.fill()
        }
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
        if(this.darknessCounter === 50){ctx.fillStyle = "black"}
        else{ctx.fillStyle = grd}
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
        this.browserScaler += .004;
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
            else if (checkInLight(this.boos[i].pos, this.mario, this.lightRange)) {
                this.boos[i].hide();
            } else if(this.boos[i].state === "hiding"){
                this.boos[i].incrementHiding();
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
        this.mario.vel = [0, 0]
        this.dead = true;
    }
}
