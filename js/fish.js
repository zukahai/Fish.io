class Fish {
    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.init();
        // this.loop();
    }

    init() {
        this.NumberOfImage = 100;
        this.fish_im = [];
        for (let i = 1; i <= this.NumberOfImage; i++) {
            this.fish_im[i] = new Image();
            this.fish_im[i].src = "images/fishes/" + i + ".png";
            try {
                this.game.context.drawImage(this.fish_im[i], 0, 0, 100, 100);
                // console.log(this.fish_im[i]);
            } catch (error) {
                console.log("huhu");
            }
        }
        this.game.context.drawImage(this.fish_im[80], 0, 0, 100, 100);
        this.vx = 0;
        this.vy = 0;
        this.indexImage = 1;
        this.countIndexImage = 0;
    }


    update() {

        this.x += this.vx;
        this.y += this.vy;

        // console.log(this.x, ' ', this.y);

        if (this.x < 0)
            this.x = 0;
        if (this.y < 0)
            this.y = 0;
        if (this.x > W_im)
            this.x = W_im;
        if (this.y > H_im)
            this.y = H_im;

        if (++this.countIndexImage > 3) {
            if (++this.indexImage > this.NumberOfImage)
                this.indexImage = 1;
            this.countIndexImage = 0;
        }

    }

    draw() {
        let dx = this.x - this.width / 2 - XX;
        let dy = this.y - this.height / 2 - YY;
        let width = this.width;
        let height = this.height;
        try {
            // this.game.context.translate(width, 0);
            // this.game.context.scale(-1, 1);
            this.game.context.drawImage(this.fish_im[this.indexImage], dx, dy, width, height);
        } catch (error) {
            this.NumberOfImage = this.indexImage - 1;
            console.log(this.NumberOfImage);
        }
    }
}