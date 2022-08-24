class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext('2d');
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        };
        image.src = "/images/maps/DemoLower.png";

        const x = 1;
        const y = 4;

        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0,
                0,
                32,
                32,
                x * 16 - 8,
                y * 16 - 18,
                32,
                32
            )
        };
        shadow.src = "/images/characters/shadow.png";

        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, // left start picture coordinate
                0, // top start picture coordinate
                32, // width to take
                32, // height to take
                x * 16 - 8, // where to place image on canvas left // 16 - dimension of single square of a map (one step)
                y * 16 - 18, // --/-- top // 8, 18 - single character square is 32x32 so to put it to 16x16 sqr need to subtract those
                32, // width of the image to use
                32 // height of the image to use
            )
        };
        hero.src = "/images/characters/people/hero.png";
    }
}