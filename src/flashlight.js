import {FLASHLIGHT_LENGTH} from "./constants"

export const flashlight = (ctx, shadow, mario) => {
    let marioX = mario.pos[0] + 14;
    let marioY = mario.pos[1] + 20;
    let flashlightStartX;
    let flashLightStartY;
    let flashLightEndX;
    let flashLightEndY;
    switch (mario.direction) {
        case "down":
            flashlightStartX = marioX - Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH;
            flashLightStartY = marioY + FLASHLIGHT_LENGTH
            flashLightEndX = marioX + Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            flashLightEndY = marioY + FLASHLIGHT_LENGTH
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 3 * Math.PI / 8, 5 * Math.PI / 8);
            break;
        case "downright":
            flashlightStartX = marioX + Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH;
            flashLightStartY = marioY + FLASHLIGHT_LENGTH
            flashLightEndX = marioX + FLASHLIGHT_LENGTH
            flashLightEndY = marioY + Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, Math.PI / 8, 3 * Math.PI / 8);
            break;
        case "right":
            flashlightStartX = marioX + FLASHLIGHT_LENGTH;
            flashLightStartY = marioY + Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH;
            flashLightEndX = marioX + FLASHLIGHT_LENGTH
            flashLightEndY = marioY - Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 15 * Math.PI / 8, Math.PI / 8);
            break;
        case "upright":
            flashlightStartX = marioX + FLASHLIGHT_LENGTH;
            flashLightStartY = marioY - Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH;
            flashLightEndX = marioX + Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            flashLightEndY = marioY - FLASHLIGHT_LENGTH
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 13 * Math.PI / 8, 15 * Math.PI / 8);
            break;
        case "up":
            flashlightStartX = marioX + Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH;
            flashLightStartY = marioY - FLASHLIGHT_LENGTH
            flashLightEndX = marioX - Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            flashLightEndY = marioY - FLASHLIGHT_LENGTH
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 11 * Math.PI / 8, 13 * Math.PI / 8);
            break;
        case "upleft":
            flashlightStartX = marioX - Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH;
            flashLightStartY = marioY - FLASHLIGHT_LENGTH
            flashLightEndX = marioX - FLASHLIGHT_LENGTH
            flashLightEndY = marioY - Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 9 * Math.PI / 8, 11 * Math.PI / 8);
            break;
        case "left":
            flashlightStartX = marioX - FLASHLIGHT_LENGTH;
            flashLightStartY = marioY - Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            flashLightEndX = marioX - FLASHLIGHT_LENGTH
            flashLightEndY = marioY + Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 7 * Math.PI / 8, 9 * Math.PI / 8);
            break;
        case "downleft":
            flashlightStartX = marioX - FLASHLIGHT_LENGTH
            flashLightStartY = marioY + Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            flashLightEndX = marioX - Math.tan(22.5 * Math.PI / 180) * FLASHLIGHT_LENGTH
            flashLightEndY = marioY + FLASHLIGHT_LENGTH
            ctx.lineTo(flashlightStartX, flashLightStartY)
            ctx.lineTo(flashLightEndX, flashLightEndY)
            ctx.moveTo(marioX, marioY)
            if (!shadow) ctx.arc(marioX, marioY, 100, 5 * Math.PI / 8, 7 * Math.PI / 8);
            break;

    }
    return { "point1": [marioX, marioY], "point2": [flashlightStartX, flashLightStartY], "point3": [flashLightEndX, flashLightEndY] }
}

export const checkInLight = (ghostPos, mario, lightRange) => {
    ghostPos = [ghostPos[0] + 10, ghostPos[1] + 10]

    if (!mario.flashLightOn) return;
    
    let point1 = lightRange.point1
    let point2 = lightRange.point2
    let point3 = lightRange.point3

    let mainArea = triangleArea(point1, point2, point3)

    let area1 = triangleArea(point1, point2, ghostPos);
    let area2 = triangleArea(point1, point3, ghostPos);
    let area3 = triangleArea(point2, point3, ghostPos);
    return (mainArea === area1 + area2 + area3)
}

const triangleArea = (point1, point2, point3) => {
    let area = (point1[0] * (point2[1] - point3[1]) + point2[0] * (point3[1] - point1[1]) + point3[0] * (point1[1] - point2[1])) / 2
    return Math.abs(area)
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