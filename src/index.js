import GameView from "./gameview";
import Game from "./game"
import { GAME_WIDTH, GAME_HEIGHT } from "./constants"

document.addEventListener("DOMContentLoaded", ()=>{
    let canvas = document.getElementById('game-canvas');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;


    const ctx = canvas.getContext("2d");
    const game = new Game();
    new GameView(game, ctx).start();
})