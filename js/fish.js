class Fish {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;

        this.init();
        this.loop();
    }

    init() {
        this.vx = 0;
        this.vy = 0;
    }

    loop() {
        this.update();
        // this.draw();
        setTimeout(() => this.loop(), 30);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    draw() {

    }
}