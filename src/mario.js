import MovingObject from "./MovingObject"
import {IMAGES, SPEED} from "./constants"

class Mario extends MovingObject{
    constructor(pos = [600, 400], vel=[0, 0]){
        super(pos);
        this.imageCount = 3;    
        this.direction = "down";
        this.vel = vel; 
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
    }

    move(){
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
        if (this.vel[0] != 0 || this.vel[1] != 0){
            this.imageCount = (this.imageCount + 1) % 8
        }
        
    }

    addVelocity(vel){
        vel = [vel[0]*SPEED, vel[1]*SPEED];
        this.vel = [this.vel[0] + vel[0], this.vel[1] + vel[1]];
        this.changeDirection();
    }

    removeVelocity(vel){
        vel = [vel[0] * SPEED, vel[1] * SPEED];
        this.vel = [this.vel[0] - vel[0], this.vel[1] - vel[1]];
        this.changeDirection();
    }

}

export default Mario