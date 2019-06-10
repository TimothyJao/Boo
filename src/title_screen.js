import {GAME_WIDTH, GAME_HEIGHT} from './constants'

export const titleScreen = (ctx) =>{
    clear(ctx);
    drawTitle(ctx);
    drawInstructions(ctx);
}

const clear = (ctx) => {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

const drawTitle = (ctx) => {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.shadowColor = "white";
    ctx.shadowBlur = 10;
    ctx.font = "80px SuperMario256"
    ctx.fillText("Boo", GAME_WIDTH/2, 150);
    ctx.closePath();
}

const drawInstructions = (ctx) => {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "30px SuperMario256"
    const text = "Press ENTER to begin";
    ctx.shadowColor = "white";
    ctx.shadowBlur = 10;
    ctx.fillText(text, GAME_WIDTH/2, 250);
    ctx.closePath();

    const width = ctx.measureText(text).width;
    const startX = GAME_WIDTH/2 - width/2

    ctx.beginPath();
    ctx.textAlign = "left";
    ctx.font = "30px SuperMario256"
    ctx.fillText("Instructions", startX, 340)
    ctx.fillText("Controls", startX, 450);
    ctx.font = "20px SuperMario256"
    ctx.fillText("- Avoid boos at all costs", startX + 20, 370);
    ctx.fillText("- Use your flashlight to stun boos", startX + 20, 400);
    ctx.fillText("- WASD to MOVE", startX + 20, 480);
    ctx.fillText("- SPACE to TURN ON FLASHLIGHT", startX + 20, 510);
    ctx.fillStyle = "";
    ctx.shadowBlur = "";
    ctx.closePath();
}