console.log("Webpack is working!")

import MovingObject from "./moving_object.js";
// import Asteroid from "./asteroid.js";


window.MovingObject = MovingObject;

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 20,
    color: "#00FF00"
  });

  mo.draw(ctx)

// const ass = new Asteroid({ pos: [30, 30] });
// ass.draw(ctx)