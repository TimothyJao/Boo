import * as Util from "./util"
import {KEY, MOVES} from "./constants"





export default class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.mario = this.game.mario;
        this.keyDown = {}
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
        document.addEventListener("keydown", this.handleKeydown);
        document.addEventListener("keyup", this.handleKeyup);
    }

    start() {
        
        Util.loadImages(()=>{
            setInterval(() => {
                this.game.draw(this.ctx);
                this.game.moveObjects();
            }, 50)
        });
            
    }

    handleKeydown(e){
        if (e.repeat || this.keyDown[e.keyCode]) return;
        switch(e.keyCode){           
            case KEY.W:
                this.mario.addVelocity(MOVES.UP)
                this.keyDown[KEY.W] = true;
                break;
            case KEY.A:
                this.mario.addVelocity(MOVES.LEFT)
                this.keyDown[KEY.A] = true;
                break;
            case KEY.S:
                this.mario.addVelocity(MOVES.DOWN)
                this.keyDown[KEY.S] = true;
                break;
            case KEY.D:
                this.mario.addVelocity(MOVES.RIGHT)
                this.keyDown[KEY.D] = true;
                break;
        }
    }

    handleKeyup(e){
        switch (e.keyCode) {
            case KEY.W:
                this.mario.removeVelocity(MOVES.UP);
                this.keyDown[KEY.W] = false;
                break;
            case KEY.A:
                this.mario.removeVelocity(MOVES.LEFT);
                this.keyDown[KEY.A] = false;
                break;
            case KEY.S:
                this.mario.removeVelocity(MOVES.DOWN);
                this.keyDown[KEY.S] = false;
                break;
            case KEY.D:
                this.mario.removeVelocity(MOVES.RIGHT);
                this.keyDown[KEY.D] = false;
                break;
        }
    }
}

