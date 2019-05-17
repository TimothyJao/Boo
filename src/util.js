import {IMAGES} from "./constants"

export const loadImages= (callback) => 
{
    let count = 0;

    const directions = ["up", "upright", "right", "downright", "down", "downleft", "left", "upleft"];
    const spriteCount = 8;
    let total = 0;

    directions.forEach(direction => {
        for (let i = 1; i <= spriteCount; i++) {
            total += 1

            let img = new Image();
            img.onload = loaded;
            img.src = `../vendors/mario/mario_${direction}_${i}.png`
            IMAGES.mario[direction].push(img)
        }
    })

    for (let i = 1; i <= 7; i++) {
        total += 1;
        let img = new Image();
        img.onload = loaded;
        img.src = `../vendors/boo/boo_left_hiding_${i}.png`
        IMAGES.boo.left.hiding.push(img)
    }

    for (let i = 1; i <= 7; i++) {
        total += 1;
        let img = new Image();
        img.onload = loaded;
        img.src = `../vendors/boo/boo_right_hiding_${i}.png`
        IMAGES.boo.right.hiding.push(img)
    }

    for (let i = 1; i <= 5; i++) {
        total += 1;
        let img = new Image();
        img.onload = loaded;
        img.src = `../vendors/boo/boo_left_attacking_${i}.png`
        IMAGES.boo.left.attacking.push(img)
    }

    for (let i = 1; i <= 5; i++) {
        total += 1;
        let img = new Image();
        img.onload = loaded;
        img.src = `../vendors/boo/boo_right_attacking_${i}.png`
        IMAGES.boo.right.attacking.push(img)
    }

    function loaded() {
        count++;
        if (count >= total) {
            callback();
        }
    }
}

