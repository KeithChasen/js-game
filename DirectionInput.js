class DirectionInput {
    constructor() {
        this.heldDirections = [];

        this.map = {
            'ArrowUp':    'up',
            'KeyW':       'up',
            'ArrowDown':  'down',
            'KeyS':       'down',
            'ArrowLeft':  'left',
            'KeyA':       'left',
            'ArrowRight': 'right',
            'KeyD':       'right',
        };
    }

    // returns first direction key because we care only about last clicked key
    // and it put to 0 index
    getDirection() {
        return this.heldDirections[0];
    }

    init() {
        document.addEventListener('keydown', e => {
            const dir = this.map[e.code];
            // if we found valid direction && it's not in array
            if (dir && this.heldDirections.indexOf(dir) === -1) {
                // put it in first place in array
                this.heldDirections.unshift(dir);
            }
        });

        document.addEventListener('keyup', e => {
            const dir = this.map[e.code];
            const index = this.heldDirections.indexOf(dir);
            if (index > -1) {
                this.heldDirections.splice(index, 1);
            }
        });
    }
}
