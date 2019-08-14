
import { GAME_WIDTH} from "./constants"

export const drawScore = function (ctx, score){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 2;
        ctx.font = "20x SuperMario256"
        ctx.fillText("Score:", GAME_WIDTH-100 , 30);
        ctx.fillText(score, GAME_WIDTH - 100, 60);
        ctx.shadowBlur = 0;
        ctx.closePath();
    }

export const drawFlashlightBar = function (ctx, mario){
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 2;
        ctx.font = "20x SuperMario256"
        ctx.fillText("Flashlight:", GAME_WIDTH - 100, 100);
        ctx.shadowBlur = 0;
        ctx.closePath();

        
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(GAME_WIDTH - 177, 115, 150, 20)
        if (mario.flashLightPower<50 && mario.mustRecharge) ctx.fillStyle = "red"
        else ctx.fillStyle = "green"
        ctx.fillRect(GAME_WIDTH - 177, 115, 150*mario.flashLightPower/100, 20)
        ctx.closePath();
    }
