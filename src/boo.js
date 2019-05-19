import MovingObject from "./MovingObject"
import { IMAGES, SPEED } from "./constants"

Window.image = IMAGES

class Boo extends MovingObject {
    constructor(pos, vel = [0, 0], direction = "left", imageCount = 0, state="attacking") {
        super(pos, vel, direction, imageCount);
        this.state = state;
        this.counter = 0;
        this.hidingCounter = 0;
        this.hitbox = {x: 15, y: 11, radius: 8}
    }

    image() {
        let image = IMAGES.boo[this.direction][this.state][this.imageCount]
        return image
    }

    nextMove(mario, gameContinue) {
        if (gameContinue){
            if (this.state === "attacking"){
                let dx = mario.pos[0] - this.pos[0];
                let dy = mario.pos[1] - this.pos[1];
                let distance = Math.sqrt(dx*dx+dy*dy)
                this.vel = [SPEED*dx/distance/2, SPEED*dy/distance/2]
                if (dx > 0) {
                    this.direction = "right";
                } else{
                    this.direction = "left";
                }
            }
            else if (this.state === "hiding") {
                this.vel = [0,0];
            }
        }
            
            
        else{
            this.vel = [0,0]
        }
    }

    hide() {
        this.state = "hiding"
        this.imageCount = 0;
        this.hidingCounter = 0;
    }
    

    incrementHiding(){
        this.hidingCounter++;
        if (this.hidingCounter >= 50){
            this.state = "attacking";
            this.hidingCounter = 0;
        }
    }

    move() {
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
        this.counter++
        if (this.counter > 8){
            this.counter = 0;
            this.imageCount = (this.imageCount + 1) % IMAGES.boo[this.direction][this.state].length;
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

    checkCollision(mario){
        let marioRange = {
            lowX: mario.pos[0]+mario.hitbox.x,
            highX: mario.pos[0] + mario.hitbox.x + mario.hitbox.width,
            lowY: mario.pos[1] + mario.hitbox.y,
            highY: mario.pos[1] + mario.hitbox.y + mario.hitbox.height,
        }

        let booRange = {
            lowX: this.pos[0] + this.hitbox.x,
            highX: this.pos[0] + this.hitbox.x + this.hitbox.width,
            lowY: this.pos[1] + this.hitbox.y,
            highY: this.pos[1] + this.hitbox.y + this.hitbox.height
        }

        let distX = Math.abs(booRange.lowX - marioRange.lowX - mario.hitbox.width/2);
        let distY = Math.abs(booRange.lowY - marioRange.lowY - mario.hitbox.height/2);

        if (distX < (mario.hitbox.width / 2 + this.hitbox.radius) && distY < (mario.hitbox.height / 2 + this.hitbox.radius)){
            return true
        }
    }
    
}

export default Boo