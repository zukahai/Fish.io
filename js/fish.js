class Fish {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.init();
        this.loop();
    }

    init() {
        this.fish_im = new Image();
        this.fish_im.src = "images/fish.jpg";
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
        let dx = (game_W - this.width) / 2;
        let dy = (game_H - this.height) / 2;
        let width = this.width;
        let height = this.height;
        this.game.context.drawImage(this.fish_im, dx, dy, width, height);
    }
}