import * as Util from "./util"
import {KEY, MOVES} from "./constants"





export default class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.mario = this.game.mario;
        this.keyDown = {}
        this.handleKeydown = this.handleKeydown.bind(this);
        // this.handleKeyup = this.handleKeyup.bind(this);
        document.addEventListener("keydown", this.handleKeydown);
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
        if (e.repeatd) return;
        switch(e.keyCode){
            case KEY.S:
                if(this.mario.direction != "down"){
                    this.mario.switchDirection("down")
                }
                this.mario.changeVelocity(MOVES.DOWN)
                break;
            case KEY.W:
                if(this.mario.direction != "up"){
                    this.mario.switchDirection("up")
                }
                this.mario.changeVelocity(MOVES.UP)
                break;
            case KEY.A:
                if (this.mario.direction != "left") {
                    this.mario.switchDirection("left")
                }
                this.mario.changeVelocity(MOVES.LEFT)
                break;
            case KEY.D:
                if (this.mario.direction != "right") {
                    this.mario.switchDirection("right")
                }
                this.mario.changeVelocity(MOVES.RIGHT)
                break;
        }
    }

    // handleKeyup(e){
    //     if (!e) return;
    //     switch (e.keyCode) {
    //         case KEY.S:
    //             if (this.mario.direction != "down") {
    //                 this.mario.switchDirection("down")
    //             }
    //             this.mario.changeVelocity(MOVES.DOWN)
    //             break;
    //         case KEY.W:
    //             if (this.mario.direction != "up") {
    //                 this.mario.switchDirection("up")
    //             }
    //             this.mario.changeVelocity(MOVES.UP)
    //     }
    // }
}

