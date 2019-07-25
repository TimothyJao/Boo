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
    ctx.shadowBlur = 5;
    ctx.font = "50px SuperMario256"
    ctx.fillText("Game Over", GAME_WIDTH / 2, 150);
    ctx.closePath();
}

const drawContinue = (ctx, score) => {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "50px SuperMario256"
    const text = "Press ENTER to play again";
    ctx.shadowColor = "white";
    ctx.shadowBlur = 5;
    ctx.fillText(text, GAME_WIDTH / 2, 450);
    ctx.closePath();

    const width = ctx.measureText(text).width;

    ctx.beginPath();
    ctx.font = "30px SuperMario256"
    ctx.fillText("Score: " + score, GAME_WIDTH / 2, 240);
    ctx.fillStyle = "";
    ctx.shadowBlur = "";
    ctx.closePath();
}