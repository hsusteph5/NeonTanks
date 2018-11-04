// const radius = 5
// const gravity = 0.5

// class Particle {
//   constructor(p, v) {
//     this.pos = p
//     this.vel = v
//   }
  
//   step() {
//     this.vel += [0, gravity]
//     this.pos += this.vel;
//   }
  
//   draw() {
//     point(this.pos.x, this.pos.y)
//   }
// }

// module.exports = Particle;

// var particles

// function setup() {
// //   createCanvas(windowWidth, windowHeight)
// //   background(0)
//   ellipseMode(RADIUS)
// 	stroke(150,50,255)
// 	strokeWeight(2 * radius)
// 	noFill()
  
//   particles = []
//   for (let i = 0; i < 300; i++) {
//     particles.push(new Particle(
//       createVector(width * 0.5, height * 0.5),
//       p5.Vector.random2D().mult(random(8)).add(0, -12)
//     ))
//   }
//   //noLoop()
// }

// function draw() {
//   background(0)
//   particles.forEach(p => p.step())
//   particles.forEach(p => p.draw())
// }

//particles can be found here: https://codepen.io/spluko/pen/vVeJeW?page=1&