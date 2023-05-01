class Asteroid extends MovingObject {
    static RADIUS = 30;
    static COLOR = 'grey'

    constructor(options) {
        super(options);
        options.color = Asteroid.COLOR;
        options.radius = Asteroid.RADIUS;
        options.vel = Util.randomVec(5);
    }
}

export default Asteroid;

import * as Util from "./util.js";