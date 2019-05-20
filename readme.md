## Overview

Boo is a personal creation that uses the timeless characters from the Mario franchise to create a survival game. The whole goal is to avoid the numerous ghosts that constantly swarm you. The longer you survive, the higher your score. The player uses WASD for movement and the spacebar for his flashlight which is his only source of defense.

### Functionality and MVP Features

#### Functionality
* The player will use the arrow keys to control mario in 8 directions

* Ghosts will constantly spawn and chase Mario wherever he goes

* Using space will trigger Mario's flashlight which has a limited use before it needs to be recharged

#### MVP Features

- [X] Render a Mario sprite that can be moved in 8 directions and is bounded by the screen

- [X] Be able to create a variable number of ghosts that will constantly be able to follow Mario and will kill him if their hitboxes collide

- [X] Implement a darkness that hides the rest of the screen except for a small region around Mario

- [ ] Create a flashlight that reveals a small distance in front of you and stuns any ghosts in its path. Has a very short usage duration and a long recharge duration

- [ ] Implement a score and leaderboard

- [ ] Make a welcome page and a game over screen

- [ ] Add difficulties and maze(?)

### Wireframe
INSERT PICTURE OF WELCOME SCREEN HERE

The app will initially consist of a welcome page which will display instructions and allows the player to start

INSERT PICTURE OF LOBBY HERE

Mario will start in the middle of the screen and will transverse the screen until he is caught

<img src="./frontend/public/images/game-img.png" align="center"/>

Upon being caught, the game over screen will appear and his score will be displayed and the user will be prompted to play again.

### Architecture and Technologies

#### Technologies 
* Vanilla Javascript
    * Clean, simple javascript 
    * used to create game logic and object oriented code
* Canvas
    * Renders our game and creates animations
    * Simplest and easiest to learn tool to render a simple javascript game
* Webpack
    * bundles multiple scripts into one accessible source
    * makes life a lot easier

#### Architecture
In addition to the webpack entry file, we will have four types of files:

Game logic: This will be contained in the game and gameview javascript files

Object logic: This will be contained in the mario, ghosts and moving objects files

### Implementation Timeline
#### Day 1:

- [X] Render a mario on the screen
- [X] Allow for 8-direction movement

#### Day 2:
- [X] Add ghost sprites that chase mario
- [X] Implemented hitboxes that detect collision

#### Day 3:
- [X] Add a layer of darkness that covers the screen except for a short range around Mario
- [X] Start flashlight logic and implementation

#### Day 4:
- [X] Finish flashlight over darkness layer
- [ ] Give flashlight a set duration and recharge
- [X] Make ghosts stunned by flashlight

#### Day 5: 
- [ ] Add welcome page and game over page
