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
        let fps = 60;
        let that = this;
        setTimeout(function(){
            switch (that.state) {
                case "title":
                    titleScreen(that.ctx)
                    break;
                case "game":
                    that.ghostCounter++;
                    if (that.ghostCounter > 20) {
                        that.ghostCounter = 0;
                        that.game.addBoo();
                    }
                    that.game.draw(that.ctx);
                    that.game.step();
                    if (that.mario.flashLightOn) {
                        that.mario.discharge();

                    } else {
                        that.mario.recharge();
                    }
                    if (!that.game.dead) that.game.score++;
                    if (that.game.gameOverChange) { that.state = "gameOver" }
                    break;
                case "gameOver":
                    gameOverScreen(that.ctx, that.game.score)
                    break;
            }
            requestAnimationFrame(that.step)
        }, 1000/fps)
            
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

    scaleCanvas(){
        const canvas = documen.querySelector("#game-canvas");
        const WIDTH = this.game.GameWidth()
    }
}

