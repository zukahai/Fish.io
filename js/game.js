let game_W = 20;
let game_H = 20;
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

        this.fish = new Fish(this, 100, 100);

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
            this.fish.vx = (x - game_W / 2) / 100;
            this.fish.vy = (y - game_H / 2) / 100;
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
    }

    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        this.context.drawImage(bg, this.fish.x, this.fish.y, game_W, game_H,
            0, 0, 5 * bg.width, 5 * bg.height);
    }
}

var g = new game();