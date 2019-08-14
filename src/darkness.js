import { GAME_WIDTH, GAME_HEIGHT, IMAGES, BOARD_WIDTH } from "./constants"
import { flashlight, flashlightShadow} from "./flashlight"

export const drawDarkness = function(ctx, mario){
        let lightRange;
        let marioX = mario.pos[0] + 14;
        let marioY = mario.pos[1] + 20;
        ctx.beginPath();
        ctx.arc(marioX, marioY, 100, 0, 2 * Math.PI, true);
        ctx.moveTo(marioX, marioY)
        if(mario.flashLightOn) {lightRange = flashlight(ctx, false, mario)}
        ctx.rect(BOARD_WIDTH, GAME_HEIGHT, -GAME_WIDTH, -GAME_HEIGHT);
        ctx.fillStyle = "black";
        ctx.fill();
        let grd = ctx.createRadialGradient(marioX, marioY, 50, marioX, marioY, 120);
        grd.addColorStop(0, "transparent");
        grd.addColorStop(1, "black");
        ctx.fillStyle = grd
        ctx.moveTo(marioX, marioY)
        if (mario.flashLightOn) {
            flashlightShadow(ctx, mario);
        } else{
            ctx.arc(marioX, marioY, 100, 0, 2 * Math.PI, );
        }
        
        ctx.fill();
        ctx.closePath();
        ctx.beginPath()
        if(mario.flashLightOn){
            let grd = ctx.createLinearGradient(marioX, marioY, 150, 0);
            grd.addColorStop(0, "rgba(255, 255, 220, 0.2)");
            grd.addColorStop(1, "rgba(0, 0, 0, 0.2)");
            ctx.moveTo(marioX, marioY)
            lightRange = flashlight(ctx, true, mario);
            ctx.fillStyle = "rgba(255, 255, 200, 0.4)";
            ctx.fill()
        }
        return lightRange
    }

export const trueDarkness = function(ctx, mario, darknessCounter){
        darknessCounter += .5;
        let marioX = mario.pos[0] + 14;
        let marioY = mario.pos[1] + 20;
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(marioX, marioY, 100, 0, 2 * Math.PI);
        ctx.rect(GAME_WIDTH, 0, -GAME_WIDTH, GAME_HEIGHT);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        let grd = ctx.createRadialGradient(marioX, marioY, 50-darknessCounter, marioX, marioY, 100-darknessCounter*2);
        grd.addColorStop(0, "transparent");
        grd.addColorStop(1, "black");
        if(darknessCounter === 50){ctx.fillStyle = "black"}
        else{ctx.fillStyle = grd}
        ctx.arc(marioX, marioY, 120, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        return darknessCounter
    }

export const gameOverScreen = function(ctx, browserScaler){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        let image = IMAGES.game_over[0]
        let newWidth = image.width * browserScaler;
        let newHeight = image.height*browserScaler
        ctx.drawImage(image, GAME_WIDTH / 2 - newWidth / 2, GAME_HEIGHT / 2 - newHeight / 2, newWidth, newHeight)
        browserScaler += .004;

        return browserScaler
    }