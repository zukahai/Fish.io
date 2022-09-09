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

        if (this.x < 0)
            this.x = 0;
        if (this.y < 0)
            this.y = 0;
        if (this.x > W_im)
            this.x = W_im;
        if (this.y > H_im)
            this.y = H_im;
    }

    draw() {
        let dx = this.x - this.width / 2 - XX;
        let dy = this.y - this.height / 2 - YY;
        let width = this.width;
        let height = this.height;
        this.game.context.drawImage(this.fish_im, dx, dy, width, height);
    }
}