
export const flashlight = (ctx, shadow, mario) => {
    let marioX = mario.pos[0] + 14;
    let marioY = mario.pos[1] + 20;
    let flashlightStartX;
    let flashLightStartY;
    let flashLightEndX;
    let flashLightEndY;
    switch (mario.direction) {
        case "down":
            flashlightStartX = marioX - Math.tan(22.5 * Math.PI / 180) * 200;
            flashLightStartY = marioY + 200
            flashLightEndX = marioX + Math.tan(22.5 * Math.PI / 180) * 200
            flashLightEndY = marioY + 200
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 3 * Math.PI / 8, 5 * Math.PI / 8);
            break;
        case "downright":
            flashlightStartX = marioX + Math.tan(22.5 * Math.PI / 180) * 200;
            flashLightStartY = marioY + 200
            flashLightEndX = marioX + 200
            flashLightEndY = marioY + Math.tan(22.5 * Math.PI / 180) * 200
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, Math.PI / 8, 3 * Math.PI / 8);
            break;
        case "right":
            flashlightStartX = marioX + 200;
            flashLightStartY = marioY + Math.tan(22.5 * Math.PI / 180) * 200;
            flashLightEndX = marioX + 200
            flashLightEndY = marioY - Math.tan(22.5 * Math.PI / 180) * 200
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 15 * Math.PI / 8, Math.PI / 8);
            break;
        case "upright":
            flashlightStartX = marioX + 200;
            flashLightStartY = marioY - Math.tan(22.5 * Math.PI / 180) * 200;
            flashLightEndX = marioX + Math.tan(22.5 * Math.PI / 180) * 200
            flashLightEndY = marioY - 200
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 13 * Math.PI / 8, 15 * Math.PI / 8);
            break;
        case "up":
            flashlightStartX = marioX + Math.tan(22.5 * Math.PI / 180) * 200;
            flashLightStartY = marioY - 200
            flashLightEndX = marioX - Math.tan(22.5 * Math.PI / 180) * 200
            flashLightEndY = marioY - 200
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 11 * Math.PI / 8, 13 * Math.PI / 8);
            break;
        case "upleft":
            flashlightStartX = marioX - Math.tan(22.5 * Math.PI / 180) * 200;
            flashLightStartY = marioY - 200
            flashLightEndX = marioX - 200
            flashLightEndY = marioY - Math.tan(22.5 * Math.PI / 180) * 200
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 9 * Math.PI / 8, 11 * Math.PI / 8);
            break;
        case "left":
            flashlightStartX = marioX - 200;
            flashLightStartY = marioY - Math.tan(22.5 * Math.PI / 180) * 200
            flashLightEndX = marioX - 200
            flashLightEndY = marioY + Math.tan(22.5 * Math.PI / 180) * 200
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 7 * Math.PI / 8, 9 * Math.PI / 8);
            break;
        case "downleft":
            flashlightStartX = marioX - 200
            flashLightStartY = marioY + Math.tan(22.5 * Math.PI / 180) * 200
            flashLightEndX = marioX - Math.tan(22.5 * Math.PI / 180) * 200
            flashLightEndY = marioY + 200
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 5 * Math.PI / 8, 7 * Math.PI / 8);
            break;

    }
    return { "point1": [marioX, marioY], "point2": [flashlightStartX, flashLightStartY], "point3": [flashLightEndX, flashLightEndY] }
}

export const flashlightShadow = (ctx, mario) => {
    let marioX = mario.pos[0] + 14;
    let marioY = mario.pos[1] + 20;
    switch(mario.direction) {
        case "down":
            ctx.arc(marioX, marioY, 100, 3 * Math.PI / 8, 5 * Math.PI / 8, true);
            break;
        case "downright":
            ctx.arc(marioX, marioY, 100, Math.PI / 8, 3 * Math.PI / 8, true);
            break;
        case "right":
            ctx.arc(marioX, marioY, 100, 15 * Math.PI / 8, Math.PI / 8, true);
            break;
        case "upright":
            ctx.arc(marioX, marioY, 100, 13 * Math.PI / 8, 15 * Math.PI / 8, true);
            break;
        case "up":
            ctx.arc(marioX, marioY, 100, 11 * Math.PI / 8, 13 * Math.PI / 8, true);
            break;
        case "upleft":
            ctx.arc(marioX, marioY, 100, 9 * Math.PI / 8, 11 * Math.PI / 8, true);
            break;
        case "left":
            ctx.arc(marioX, marioY, 100, 7 * Math.PI / 8, 9 * Math.PI / 8, true);
            break;
        case "downleft":
            ctx.arc(marioX, marioY, 100, 5 * Math.PI / 8, 7 * Math.PI / 8, true);
            break;
    }  
}