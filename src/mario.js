import MovingObject from "./MovingObject"
import {IMAGES} from "./constants"

class Mario extends MovingObject{
    constructor(pos = [600, 400], vel=[0, 0]){
        super(pos);
        this.imageCount = 0;    
        this.direction = "down";
        this.vel = vel; 
    }

    image(){
        let image = IMAGES.mario[this.direction][this.imageCount]
        this.imageCount = (this.imageCount + 1) % 8
        return image
    }

    switchDirection(direction){
        this.direction = direction;
        this.imageCount = 0;
    }

    move(){
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
    }

    changeVelocity(vel){
        this.vel = [this.vel[0] + vel[0], this.vel[1] + vel[1]];
    }
}

export default Mario