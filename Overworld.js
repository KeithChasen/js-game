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

        const x = 0;
        const y = 0;
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, // left start picture coordinate
                0, // top start picture coordinate
                32, // width to take
                32, // height to take
                x, // where to place image on canvas left
                y, // where to place image on canvas top
                32, // width of the image to use
                32 // height of the image to use
            )
        };
        hero.src = "/images/characters/people/hero.png";
    }
}