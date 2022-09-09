let game_W = 20;
let game_H = 20;
let XX = YY = 0;
let H_im = W_im = 0;
var bg = new Image();
var chX = 0,
    chY = 0;
bg.src = "images/background.png";


class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
    }

    init() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.fish = new Fish(this, 0.5 * bg.width, 0.5 * bg.height, 100, 150);

        this.render();
        this.loop();
        this.listenMouse();
    }

    listenMouse() {
        document.addEventListener("mousedown", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
        })

        document.addEventListener("mousemove", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
            let vX = (x - (this.fish.x - XX));
            let vY = (y - (this.fish.y - YY));
            let vH = Math.sqrt(vX * vX + vY * vY);
            this.fish.vx = 3 * vX / vH;
            this.fish.vy = 3 * vY / vH;
            console.log(this.fish.vx, ' ', this.fish.vy);
        })

        document.addEventListener("mouseup", evt => {
            var x = evt.offsetX == undefined ? evt.layerX : evt.offsetX;
            var y = evt.offsetY == undefined ? evt.layerY : evt.offsetY;
        })
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 20);
    }

    update() {
        this.fish.update();
    }

    render() {
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        game_W = this.canvas.width;
        game_H = this.canvas.height;
    }

    draw() {
        this.clearScreen();
        this.fish.draw();
    }

    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        W_im = 1 * bg.width;
        H_im = 1 * bg.height;
        XX = this.fish.x - game_W / 2;
        YY = this.fish.y - game_H / 2;
        // if (XX < 0)
        //     XX = 0;
        // if (YY < 0)
        //     YY = 0;
        // if (XX + game_W > W_im)
        //     XX = W_im - game_W;
        // if (YY + game_H > H_im)
        //     YY = H_im - game_H;

        this.context.drawImage(bg, XX, YY, W_im / 2, H_im / 2,
            0, 0, 2 * W_im, 2 * H_im);
    }
}

var g = new game();