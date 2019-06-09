import { GAME_WIDTH, GAME_HEIGHT } from './constants'

export const gameOverScreen = (ctx, score) => {
    clear(ctx);
    drawGameOver(ctx);
    drawContinue(ctx, score);
}

const clear = (ctx) => {
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

const drawGameOver = (ctx) => {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.shadowColor = "white";
    ctx.shadowBlur = 10;
    ctx.font = "50px SuperMario256"
    ctx.fillText("Game Over", GAME_WIDTH / 2, 60);
    ctx.closePath();
}

const drawContinue = (ctx) => {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "30px SuperMario256"
    const text = "Press ENTER to begin";
    ctx.shadowColor = "white";
    ctx.shadowBlur = 10;
    ctx.fillText(text, GAME_WIDTH / 2, 200);
    ctx.closePath();

    const width = ctx.measureText(text).width;
    const startX = GAME_WIDTH / 2 - width / 2

    ctx.beginPath();
    ctx.textAlign = "left";
    ctx.font = "20px SuperMario256"
    ctx.fillText("- WASD to MOVE", startX + 20, 340);
    ctx.fillText("- SPACE to TURN ON FLASHLIGHT", startX + 20, 370);
    ctx.fillStyle = "";
    ctx.shadowBlur = "";
    ctx.closePath();
}