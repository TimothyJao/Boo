import GameView from "./gameview";
import { GAME_WIDTH, GAME_HEIGHT } from "./constants"

document.addEventListener("DOMContentLoaded", ()=>{
    let canvas = document.getElementById('game-canvas');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;
    
    const ctx = canvas.getContext("2d");
    new GameView(ctx).start();
})

