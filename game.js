class Player {
    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 50;
        this.height = 50;
        this.maxSpeed = 7;
        this.speed = 0;
        this.image = document.getElementById("imgPlayer");

        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10
        };
    }

    moveLeft() {
        this.speed = - this.maxSpeed;
    }

    moveRight() {
        this.speed = + this.maxSpeed;
    }

    //moveUp() {}

    stop() {
        this.speed = 0;
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y);
    } 

    update(deltaTime) {
        this.position.x += this.speed;
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) 
            this.position.x = this.gameWidth - this.width;
    }
}

class Rival {
    constructor(game) {
        this.game = game;
        this.image = document.getElementById("imgRival");
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.position = {x: 10, y: 10};
        this.speed = {x: 2, y: 1};
        this.width = 50;
        this.height = 250;
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y);
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x + this.width > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if (this.position.y + this.height  > this.gameWidth || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
    }
}

class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

    }

   start() {
        this.player = new Player(this);
        this.rival = new Rival(this);    
        this.gameObjects = [this.player, this.rival];
        new InputHandler(this.player, this);
   }

    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime));
        
    }

    draw(context) {
        this.gameObjects.forEach(object => object.draw(context));
    }
}

class InputHandler {
    constructor(player, game) {
        document.addEventListener("keydown", event => {
            switch(event.keyCode) {
                case 37:
                    player.moveLeft();
                    break;
                case 39:
                    player.moveRight();
                    break;
            }
        });

        document.addEventListener("keyup", event => {
            switch(event.keyCode) {
                case 37:
                    if(player.speed < 0)
                        player.stop();
                    break;
                case 39:
                    if(player.speed > 0)
                        player.stop();
                    break;
            }
        });
    }
}

const canvas = document.getElementById("game-screen");
const context = canvas.getContext("2d");

const gameWidth = 600;
const gameHeight = 400;

let game = new Game(gameWidth, gameHeight);
game.start();

let lastTime = 0;

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    context.clearRect(0, 0, gameWidth, gameHeight);

    game.update(deltaTime);
    game.draw(context);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);


