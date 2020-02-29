let img;
let background = false;
let firstClick = 0;
let grabX, grabY;

function preload() {
  img = loadImage("assets/Screen Shot 2020-02-27 at 5.50.58 PM.png");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  if (!background) {
    image(img, 0, 0);
    background = true;
  }

  if (mouseIsPressed) {
    if (firstClick === 0) {
      grabX = mouseX;
      grabY = mouseY;
      firstClick += 1;
    }
    grabImage(grabX, grabY);
  } else {
    firstClick = 0;
  }
}

function grabImage() {
  image(
    img,
    mouseX - 75,
    mouseY - 75,
    img.width / 8,
    img.height / 8,
    grabX - 75,
    grabY - 75,
    img.width / 8,
    img.height / 8
  );
}
