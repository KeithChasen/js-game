class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            'up': ["y", -1],
            'down': ["y", 1],
            'left': ["x", -1],
            'right': ["x", 1],
        }
    }

    update(state) {
        if (this.movingProgressRemaining > 0) {
            this.updatePosition();
        } else {
            //more cases for starting walk

            //we're keyboard ready and have arrow pressed
            if (this.isPlayerControlled && state.arrow) {
                this.startBehavior(state, {
                    type: 'walk',
                    direction: state.arrow
                });
            }
            this.updateSprite(state);
        }
    }

    startBehavior(state, behavior) {
        this.direction = behavior.direction;
        if (behavior.type === 'walk') {
            // don't move if space is not free
            if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                return;
            }
            // otherwise walk
            this.movingProgressRemaining = 16;
        }
    }

    updatePosition() {
        const [property, change] = this.directionUpdate[this.direction]
        this[property] += change;
        this.movingProgressRemaining -= 1;
    }

    updateSprite(state) {
        if (this.isPlayerControlled && this.movingProgressRemaining === 0 && !state.arrow) {
            this.sprite.setAnimation('idle-' + this.direction);
            return;
        }

        if (this.movingProgressRemaining > 0) {
            this.sprite.setAnimation('walk-' + this.direction);
        }
    }
}