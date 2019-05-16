import Mario from "./mario"
import {GAME_WIDTH, GAME_HEIGHT} from "./constants"

export default class Game {
    constructor(){
        this.mario = new Mario();
    }

    draw(ctx){
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "#888888";
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
        ctx.drawImage(this.mario.image(), this.mario.pos[0], this.mario.pos[1])
    }

    moveObjects(){
        this.mario.move();
    }

    allObejcts(){
        return this.mario;
    }
}
