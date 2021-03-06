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
    ctx.shadowBlur = 4;
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
    ctx.shadowBlur = 2;
    ctx.fillText(text, GAME_WIDTH/2, 250);
    ctx.closePath();

    const width = ctx.measureText(text).width;
    const startX = GAME_WIDTH/2 - width/2

    ctx.beginPath();
    ctx.textAlign = "left";
    ctx.font = "30px SuperMario256"
    ctx.fillText("Instructions", startX, 340)
    ctx.fillText("Controls", startX, 530);
    ctx.font = "20px SuperMario256"
    ctx.fillText("- Avoid boos at all costs", startX, 370);
    ctx.fillText("- Use your flashlight to stun boos", startX, 400);
    ctx.fillText("- If you discharge your whole battery, you cannot", startX, 430);
    ctx.fillText("use your flashlight until it recharges to 50%", startX + 20, 460);
    ctx.fillText("- WASD to MOVE", startX, 560);
    ctx.fillText("- SPACE to TURN ON FLASHLIGHT", startX, 590);
    ctx.fillStyle = "";
    ctx.shadowBlur = "";
    ctx.closePath();
}