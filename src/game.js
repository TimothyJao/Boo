import Mario from "./mario"
import Boo from "./boo"
import {GAME_WIDTH, GAME_HEIGHT, SPAWN_RANGE, MAXGHOSTS, BOARD_WIDTH} from "./constants"
import {checkInLight} from "./flashlight"
import {drawDarkness, trueDarkness, gameOverScreen} from "./darkness"
import {drawScore, drawFlashlightBar} from "./sidebar"

export default class Game {
    constructor() {
        this.mario = new Mario();
        this.boos = [];
        this.darknessCounter = 0;
        this.dead = false;
        this.lightRange = {};
        this.browserScaler = 0;
        this.score = 0;
        this.batteryColor = "green";
        this.gameOverChange = false;
        this.booRandomPosition = this.booRandomPosition.bind(this)
        this.checkCollisions = this.checkCollisions.bind(this)
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
        let booX = Math.floor(Math.random() * (BOARD_WIDTH));
        let booY = Math.floor(Math.random() * GAME_HEIGHT);
        let booPos = [booX, booY]
        if ((this.mario.pos[0] >= (booX - SPAWN_RANGE) && this.mario.pos[0] <= (booX + SPAWN_RANGE)) ||
            (this.mario.pos[1] >= (booY - SPAWN_RANGE) && this.mario.pos[1] <= (booY + SPAWN_RANGE))){
            booPos = this.booRandomPosition();
        }
        return booPos;
    }

    draw(ctx){
        ctx.clearRect(0, 0, BOARD_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "#888888";
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
        ctx.drawImage(this.mario.image(), this.mario.pos[0], this.mario.pos[1])
        for (let i = 0; i < this.boos.length; i++) {
            let boo = this.boos[i];
            boo.nextMove(this.mario, !this.dead);
            ctx.drawImage(boo.image(), boo.pos[0], boo.pos[1]);
        } 
        if (!this.dead){
            this.lightRange = drawDarkness(ctx, this.mario)
            this.drawBorder(ctx)
            drawScore(ctx, this.score)
            drawFlashlightBar(ctx, this.mario)
        } 
        else if(this.dead && this.darknessCounter < 50){
            this.darknessCounter = trueDarkness(ctx, this.mario, this.darknessCounter)
        }
        else if(this.darknessCounter >= 50 && this.browserScaler < 1.3){
            this.browserScaler = gameOverScreen(ctx, this.browserScaler)
        }
        if (this.browserScaler >= 1.3){
            this.gameOverChange = true;
        }
    }

    
    drawBorder(ctx){
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(BOARD_WIDTH, 0, 200, GAME_HEIGHT)
        ctx.closePath();
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
