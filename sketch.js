let img;
let background = false;

function preload() {
  img = loadImage("/assets/photo-1534796636912-3b95b3ab5986.jpg ");
}
function setup() {
  createCanvas(img.width, img.height);
  // background(255, 255, 255);

  // translucent stroke using alpha value
  stroke("gray");
}

function draw() {
  if (!background) {
    image(img, 0, 0);
    background = true;
  }

  // draw two random chords each frame
  randomChord();
  randomChord();
  randomChord();
}

function randomChord() {
  // find a random point on a circle
  let angle1 = random(0, 2 * PI);
  let xpos1 = 300 + 300 * cos(angle1);
  let ypos1 = 300 + 300 * sin(angle1);

  // find another random point on the circle
  let angle2 = random(0, 2 * PI);
  let xpos2 = 300 + 300 * cos(angle2);
  let ypos2 = 300 + 300 * sin(angle2);

  // draw a line between them
  line(xpos1, ypos1, xpos2, ypos2);
}
