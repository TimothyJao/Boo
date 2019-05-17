import Mario from "./mario"
import Boo from "./boo"
import {GAME_WIDTH, GAME_HEIGHT} from "./constants"

export default class Game {
    constructor(){
        this.boos = [];
        this.addBoo();
        this.mario = new Mario();
    }

    addBoo(){
        this.boos.push(new Boo({pos: this.booRandomPosition()}));
    }
    booRandomPosition(){
        let booX = Math.floor(Math.random()*GAME_WIDTH);
        let booY = Math.floor(Math.random() * GAME_HEIGHT);
        return [booX, booY]
    }

    draw(ctx){
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        ctx.fillStyle = "#888888";
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
        ctx.drawImage(this.mario.image(), this.mario.pos[0], this.mario.pos[1])
        for (let i = 0; i < this.boos.length; i++) {
            let boo = this.boos[i];
            ctx.drawImage(boo.image(), boo.pos[0], boo.pos[1])
        }
    }

    moveObjects(){
        for (let i = 0; i < this.allObjects().length; i++){
            this.allObjects()[i].move()
        }
    }

    allObjects(){
        arr = Object.assign([], boos)
        arr.push(this.mario);
        return arr
    }
}
