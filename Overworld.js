class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext('2d');
        this.map = null;
    }

    startGameLoop() {
        const step = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // establish camera person
            const cameraObject = this.map.gameObjects.hero;

            // update all objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.getDirection(),
                    map: this.map
                });
            });

            // lower layer
            this.map.drawLowerImage(this.ctx, cameraObject);

            //draw game objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx, cameraObject);
            });

            // upper layer
            this.map.drawUpperImage(this.ctx, cameraObject);
            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
        this.map.mountObjects();

        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.startGameLoop();
    }
}