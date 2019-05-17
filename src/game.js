import Mario from "./mario"
import Boo from "./boo"
import {GAME_WIDTH, GAME_HEIGHT, SPAWN_RANGE} from "./constants"

export default class Game {
    constructor() {
        this.mario = new Mario();
        this.boos = [];
        this.maxGhosts = 20;
        this.addBoo();
        this.booRandomPosition = this.booRandomPosition.bind(this)
        this.dead = false;
        this.checkCollisions = this.checkCollisions.bind(this)
    }

    addBoo(){
        if (!this.dead){
            if (this.boos.length > this.maxGhosts){
                this.boos.shift();
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
        this.drawDarkness(ctx)
    }

    drawDarkness(ctx){
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.mario.pos[0] + 15, this.mario.pos[1] + 20, 100, 0, 2 * Math.PI);
        ctx.rect(GAME_WIDTH, 0, -GAME_WIDTH, GAME_HEIGHT);
        ctx.fill();
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
        this.dead = true;
    }
}
