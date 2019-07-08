export default class Character {
    constructor(gameWidth, gameHeight){
        this.width = 20;
        this.height = 50;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height -10
        };
    }

    draw(context) {
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}