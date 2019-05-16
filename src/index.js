import GameView from "./gameview";
import Game from "./game"

document.addEventListener("DOMContentLoaded", ()=>{
    let canvas = document.getElementById('game-canvas');
    canvas.width = 1200;
    canvas.height = 800;


    const ctx = canvas.getContext("2d");
    const game = new Game();
    new GameView(game, ctx).start();
})