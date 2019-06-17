## Overview

Boo is a personal creation that uses the timeless characters from the Mario franchise to create a survival game. The whole goal is to avoid the numerous ghosts that constantly swarm you. The longer you survive, the higher your score. The player uses WASD for movement and the spacebar for his flashlight which is his only source of defense.

### Functionality and MVP Features

#### Functionality
* The player will use the arrow keys to control mario in 8 directions

* Ghosts will constantly spawn and chase Mario wherever he goes

* Using space will trigger Mario's flashlight which has a limited use before it needs to be recharged

### Wireframe
<img src="./vendors/screenshots/welcomeboo.png" align="center"/>

The app will initially consist of a welcome page which will display instructions and allows the player to start

<img src="./vendors/screenshots/boo.png" align="center"/>

Mario will start in the middle of the screen and will transverse the screen until he is caught

<img src="./vendors/screenshots/gameoverboo.png" align="center"/>

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
