import * as Util from "./util"
import Game from "./game"
import {KEY, MOVES} from "./constants"
import {titleScreen} from "./title_screen"
import {gameOverScreen} from "./game_over_screen"

export default class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.mario = this.game.mario;
        this.state = "title"
        this.keyDown = {}
        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
        this.ghostCounter = 0;
        this.flashlightCounter = 0;
        this.step = this.step.bind(this)
        document.addEventListener("keydown", this.handleKeydown);
        document.addEventListener("keyup", this.handleKeyup);
    }

    start() {
        Util.loadImages(()=>{
            requestAnimationFrame(this.step)
        });       
    }

    step() {
        switch(this.state){
            case "title":
                titleScreen(this.ctx)
                break;
            case "game":
                this.ghostCounter++;
                if(this.ghostCounter > 20){
                    this.ghostCounter = 0;
                    this.game.addBoo();
                }
                this.game.draw(this.ctx);
                this.game.step();
                if (this.mario.flashLightOn){
                        this.mario.discharge();
                    
                } else{
                    this.mario.recharge();     
                }
                if (!this.game.dead) this.game.score++;
                if(this.game.gameOverChange){this.state = "gameOver"}
                break;
            case "gameOver":
                gameOverScreen(this.ctx, this.game.score)
                break;
        }
        requestAnimationFrame(this.step)
    }

    handleKeydown(e){
        if (e.repeat || this.keyDown[e.keyCode]) return;
        if (e.keyCode === KEY.ENTER){
            if (this.state === "title" || this.state === "gameOver") {
                this.state = "game" 
                this.game = new Game();
                this.mario = this.game.mario;
                this.keyDown = {};
            }
        } 
        if (!this.game.dead) {
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
                case KEY.SPACE:
                    this.mario.flashLight();
                    this.keyDown[KEY.SPACE] = true;
                    break;
            }
        }
    }

    handleKeyup(e){
        if (!this.game.dead) {
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
                case KEY.SPACE:
                    this.mario.flashLight();
                    this.keyDown[KEY.SPACE] = false;
                    break;
            }
        }
    }
}

