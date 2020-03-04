let rectangle, circle;

let num = 2000;
let range = 600;

let numTongue = 8;
let rangeTongue = 200;

let ax = [];
let ay = [];

let bx = [];
let by = [];

let cx = [];
let cy = [];

let dx = [];
let dy = [];

let ex = [];
let ey = [];

let fx = [];
let fy = [];

let gx = [];
let gy = [];

let hx = [];
let hy = [];

let ix = [];
let iy = [];

let jx = [];
let jy = [];

function setup() {
  // Create the canvas
  createCanvas(1200, 800);
  background("black");

  for (let i = 0; i < num; i++) {
    ax[i] = 230;
    ay[i] = 150;
  }

  for (let i = 0; i < num; i++) {
    bx[i] = 140;
    by[i] = 100;
  }

  for (let i = 0; i < num; i++) {
    cx[i] = 500;
    cy[i] = 100;
  }

  for (let i = 0; i < num; i++) {
    dx[i] = 340;
    dy[i] = 250;
  }

  for (let i = 0; i < num; i++) {
    ex[i] = 240;
    ey[i] = 150;
  }

  for (let i = 0; i < num; i++) {
    fx[i] = 440;
    fy[i] = 150;
  }

  for (let i = 0; i < num; i++) {
    gx[i] = 420;
    gy[i] = 130;
  }

  for (let i = 0; i < num; i++) {
    hx[i] = 245;
    hy[i] = 155;
  }

  for (let i = 0; i < num; i++) {
    ix[i] = 445;
    iy[i] = 155;
  }

  for (let i = 0; i < num; i++) {
    jx[i] = 330;
    jy[i] = 420;
  }

  frameRate(120);
}

function draw() {
  // Shift all elements 1 place to the left
  newLine(bx, by, 140, 220, 100, 250, 170, 93, 56, 120); // left ear
  newLine(cx, cy, 500, 580, 100, 250, 170, 93, 56, 120); // right ear
  newLine(ax, ay, 230, 500, 150, 350, 255, 255, 255, 220); // face
  newLine(dx, dy, 320, 400, 250, 320, 24, 24, 24, 30); // nose
  newLine(ex, ey, 240, 280, 150, 190, 24, 24, 24, 10); // left eye
  newLine(hx, hy, 245, 260, 155, 170, 255, 255, 255, 3); // left pupil
  newLine(gx, gy, 420, 500, 130, 210, 170, 93, 56, 20); // right eye patch
  newLine(fx, fy, 440, 480, 150, 190, 24, 24, 24, 5); // right eye
  newLine(ix, iy, 445, 460, 155, 170, 255, 255, 255, 3); // right pupil
  newLine(jx, jy, 330, 400, 420, 500, 168, 88, 121, 30); // tongue
}

function newLine(lx, ly, c1, c2, c3, c4, r, g, b, weight) {
  for (let i = 1; i < num; i++) {
    lx[i - 1] = lx[i];
    ly[i - 1] = ly[i];
  }

  // Put a new value at the end of the arrly
  lx[num - 1] += random(-range, range);
  ly[num - 1] += random(-range, range);

  // Constrain all points to the screen
  lx[num - 1] = constrain(lx[num - 1], c1, c2);
  ly[num - 1] = constrain(ly[num - 1], c3, c4);

  // Draw a line connecting the points
  for (let j = 1; j < num; j++) {
    let val = (j / num) * 204.0 + 51;
    stroke(r, g, b);
    strokeWeight(weight);
    line(lx[j - 1], ly[j - 1], lx[j], ly[j]);
  }
}
