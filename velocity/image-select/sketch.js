let img;

// Variables related to grabbed image
let grabX, grabY;
let background = false;
let i;

// Variables related to moving img
let position;
let velocity;
let r = 10;
let speed = 3.5;

function preload() {
  img = loadImage("assets/Screen Shot 2020-02-27 at 5.50.58 PM.png");
}

function setup() {
  createCanvas(img.width, img.height);

  velocity = p5.Vector.random2D();
  velocity.mult(speed);
}

function draw() {
  if (!background) {
    image(img, 0, 0);
    background = true;
  }

  if (i === 1) {
    grabX = mouseX;
    grabY = mouseY;
    position = createVector(mouseX, mouseY);
  }

  if (position) {
    image(
      img,
      position.x,
      position.y,
      img.width / 8,
      img.height / 8,
      grabX - 75,
      grabY - 75,
      img.width / 8,
      img.height / 8
    );

    position.add(velocity);

    incidence = p5.Vector.mult(velocity, -1);
    incidence.normalize();

    // detect boundary collision
    // right
    if (position.x > width - r) {
      position.x = width - r;
      velocity.x *= -1;
    }
    // left
    if (position.x < r) {
      position.x = r;
      velocity.x *= -1;
    }
    // top
    if (position.y < r) {
      position.y = r;
      velocity.y *= -1;
    }

    // bottom
    if (position.y > height - r) {
      position.y = height - r;
      velocity.y *= -1;
    }
  }

  i = 0;
}

function mouseClicked() {
  i += 1;
}
