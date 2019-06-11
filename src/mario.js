import MovingObject from "./MovingObject"
import { IMAGES, SPEED, DIAG_SPEED, GAME_WIDTH, GAME_HEIGHT} from "./constants"

class Mario extends MovingObject{
    constructor(pos = [GAME_WIDTH / 2, GAME_HEIGHT / 2 - 20], vel = [0, 0], direction = "down", imageCount = 3){
        super(pos, vel, direction, imageCount);
        this.counter = 0;
        this.hitbox = {x: 12, y: 9, width: 7, height: 19}
        this.flashLightOn = false
        this.flashLightPower = 100;
        this.mustRecharge = false;
    }

    image(){
        let image = IMAGES.mario[this.direction][this.imageCount]
        return image
    }

    changeDirection(){
        if(this.vel[0] === 0 && this.vel[1] === -SPEED){
            this.direction = "up";
        } 
        else if (this.vel[0] === 0 && this.vel[1] === SPEED){
            this.direction = "down"
        }
        else if (this.vel[0] === SPEED && this.vel[1] === 0) {
            this.direction = "right"
        }
        else if (this.vel[0] === -SPEED && this.vel[1] === 0) {
            this.direction = "left"
        }
        else if (this.vel[0] === SPEED && this.vel[1] === SPEED) {
            this.direction = "downright"
        }
        else if (this.vel[0] === -SPEED && this.vel[1] === SPEED) {
            this.direction = "downleft"
        }
        else if (this.vel[0] === SPEED && this.vel[1] === -SPEED) {
            this.direction = "upright"
        }
        else if (this.vel[0] === -SPEED && this.vel[1] === -SPEED) {
            this.direction = "upleft"
        }
        this.imageCount = 3;
    }

    move(){
        if (!this.canMove()) return;
        if (Math.abs(this.vel[0]) === Math.abs(this.vel[1])){
            this.pos = [this.pos[0] + this.vel[0] / DIAG_SPEED, this.pos[1] + this.vel[1] / DIAG_SPEED]
        } else {
            this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
        }
        this.counter++
        if (this.counter > 8) {
            this.counter = 0
            if (this.vel[0] != 0 || this.vel[1] != 0){
                this.imageCount = (this.imageCount + 1) % 8
            }   
        }     
    }

    canMove(){
        if (this.pos[0] > GAME_WIDTH-22 && this.vel[0] > 0){
            return false;
        }

        else if (this.pos[0] < 0 && this.vel[0] < 0){
            return false
        }

        else if (this.pos[1] > GAME_HEIGHT - 38 && this.vel[1] > 0){
            return false;
        }

        else if (this.pos[1] < 0 && this.vel[1] < 0){
            return false;
        } 

        else{
            return true;
        }
    }

    addVelocity(vel){
        vel = [vel[0] * SPEED, vel[1] * SPEED];
        this.vel = [this.vel[0] + vel[0], this.vel[1] + vel[1]];
        this.changeDirection();
    }

    removeVelocity(vel){
        vel = [vel[0] * SPEED, vel[1] * SPEED];
        this.vel = [this.vel[0] - vel[0], this.vel[1] - vel[1]];
        this.changeDirection();
    }

    discharge(){
        if(this.flashLightPower >= 0 && !this.mustRecharge) {
            this.flashLightPower -= 1;
        } else{
            this.mustRecharge = true;
            this.flashLightOn = false;
        }
    }

    recharge(){
        if(this.flashLightPower < 100){
            this.flashLightPower += .3;
            if(this.flashLightPower > 50){
                this.mustRecharge = false;
            }
        }
    }

    flashLight(){
        if (this.flashLightOn){
            this.flashLightOn = false;
        } else if (!this.flashLightOn && !this.mustRecharge){
            this.flashLightOn = true
        }
    }

}

export default Mario