import MovingObject from "./MovingObject"
import { IMAGES, SPEED, GAME_WIDTH, GAME_HEIGHT } from "./constants"

class Boo extends MovingObject {
    constructor(pos, vel = [0, 0], direction = "left", imageCount = 0, state="hiding") {
        super(pos, vel, direction, imageCount);
        this.state = state;
    }

    image() {
        let image = IMAGES.boo[this.direction][this.state][this.imageCount]
        return image
    }

    // changeDirection() {
    //     if (this.vel[0] === 0 && this.vel[1] === -SPEED) {
    //         this.direction = "up";
    //     }
    //     else if (this.vel[0] === 0 && this.vel[1] === SPEED) {
    //         this.direction = "down"
    //     }
    //     else if (this.vel[0] === SPEED && this.vel[1] === 0) {
    //         this.direction = "right"
    //     }
    //     else if (this.vel[0] === -SPEED && this.vel[1] === 0) {
    //         this.direction = "left"
    //     }
    //     else if (this.vel[0] === SPEED && this.vel[1] === SPEED) {
    //         this.direction = "downright"
    //     }
    //     else if (this.vel[0] === -SPEED && this.vel[1] === SPEED) {
    //         this.direction = "downleft"
    //     }
    //     else if (this.vel[0] === SPEED && this.vel[1] === -SPEED) {
    //         this.direction = "upright"
    //     }
    //     else if (this.vel[0] === -SPEED && this.vel[1] === -SPEED) {
    //         this.direction = "upleft"
    //     }
    //     this.imageCount = 3;
    // }

    move() {
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
        if (this.vel[0] != 0 || this.vel[1] != 0) {
            this.imageCount = (this.imageCount + 1) % 7
        }
    }

    addVelocity(vel) {
        vel = [vel[0] * SPEED, vel[1] * SPEED];
        this.vel = [this.vel[0] + vel[0], this.vel[1] + vel[1]];
        this.changeDirection();
    }

    removeVelocity(vel) {
        vel = [vel[0] * SPEED, vel[1] * SPEED];
        this.vel = [this.vel[0] - vel[0], this.vel[1] - vel[1]];
        this.changeDirection();
    }

}

export default Boo