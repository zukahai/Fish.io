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
        this.fish_im = [];
        for (let i = 1; i <= 12; i++) {
            this.fish_im[i] = new Image();
            this.fish_im[i].src = "images/fishes/" + i + ".png";
        }

        this.vx = 0;
        this.vy = 0;
        this.indexImage = 1;
        this.countIndexImage = 0;
    }

    loop() {
        this.update();
        // this.draw();
        setTimeout(() => this.loop(), 30);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // console.log(this.x, ' ', this.vx);

        if (this.x < 0)
            this.x = 0;
        if (this.y < 0)
            this.y = 0;
        if (this.x > W_im)
            this.x = W_im;
        if (this.y > H_im)
            this.y = H_im;

        if (++this.countIndexImage > 30) {
            if (++this.indexImage > 12)
                this.indexImage = 1;
            this.countIndexImage = 0;
        }

    }

    draw() {
        let dx = this.x - this.width / 2 - XX;
        let dy = this.y - this.height / 2 - YY;
        let width = this.width;
        let height = this.height;
        this.game.context.drawImage(this.fish_im[this.indexImage], dx, dy, width, height);
    }
}