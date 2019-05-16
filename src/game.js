import Mario from "./mario"

export default class Game {
    constructor(){
        this.mario = new Mario();
    }

    draw(ctx){
        ctx.clearRect(0, 0, 1200, 800);
        ctx.fillStyle = "#888888";
        ctx.fillRect(0, 0, 1200, 800)
        ctx.drawImage(this.mario.image(), this.mario.pos[0], this.mario.pos[1])
    }

    moveObjects(){
        this.mario.move();
    }

    allObejcts(){
        return this.mario;
    }
}
