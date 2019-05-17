import MovingObject from "./MovingObject"
import { IMAGES, SPEED, DIAG_SPEED, GAME_WIDTH, GAME_HEIGHT} from "./constants"

class Mario extends MovingObject{
    constructor(pos = [GAME_WIDTH / 2, GAME_HEIGHT / 2 - 20], vel = [0, 0], direction = "down", imageCount = 3){
        super(pos, vel, direction, imageCount);
        this.counter = 0;
        this.hitbox = {x: 12, y: 9, width: 7, height: 19}
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
        if (Math.abs(this.vel[0]) === Math.abs(this.vel[1])){
            this.pos = [this.pos[0] + this.vel[0] / DIAG_SPEED, this.pos[1] + this.vel[1] / DIAG_SPEED]
        } else {
            this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
        }
        this.counter++
        if (this.counter > 4) {
            this.counter = 0
            if (this.vel[0] != 0 || this.vel[1] != 0){
                this.imageCount = (this.imageCount + 1) % 8
            }   
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

}

export default Mario