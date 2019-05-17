export const GAME_WIDTH = 1280;
export const GAME_HEIGHT = 720; 

export const IMAGES = {
    mario: {
        up: [],
        upright: [],
        right: [],
        downright: [],
        down: [],
        downleft: [],
        left: [],
        upleft: []
    },
    boo: {
        left:{
            hiding: []
        }
    }
}

export const KEY = {
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    W: 87,
    UP: 38,
    LEFT: 37,
    DOWN: 40,
    RIGHT: 39,
};

export const SPEED = 3;

export const MOVES = {
    UP: [0, -1],
    LEFT: [-1, 0],
    DOWN: [0, 1],
    RIGHT: [1, 0],
    ZERO: [0, 0]
};
