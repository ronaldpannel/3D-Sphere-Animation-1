let r = 150;

let frequencySlider, frequencySlider2;
let frequency, frequency2;

function setup() {
  canvas = createCanvas(600, 600, WEBGL);
  canvas.parent("container");
  angleMode(DEGREES);
  colorMode(HSB);

  stroke(199, 80, 88);
  strokeWeight(3);
  noFill();

  frequency = createDiv();
  frequency.parent("container");
  frequencySlider = createSlider(1, 10, 1, 0.1);
  frequencySlider.parent("container");
  frequency.class("valueDisplay");
  frequencySlider.class("Slider");

  frequency2 = createDiv();
  frequency2.parent("container");
  frequencySlider2 = createSlider(1, 10, 1, 0.1);
  frequencySlider2.parent("container");
  frequency2.class("valueDisplay");
  frequencySlider2.class("Slider");
}

function draw() {
  background(230, 50, 15);
  orbitControl(4, 4);

  rotateY(90);
  rotateZ(65);
  lissajous_3d();

  frequency.html("Frequency: " + frequencySlider.value());
  frequency2.html("Frequency2: " + frequencySlider2.value());
}
function windowResized() {
  resizeCanvas(600, 600);
}

function lissajous_3d() {
  beginShape();
  for (let theta = 0; theta < 360; theta += 0.2) {
    let x = r * cos(theta * frequencySlider.value());
    let y =
      r *
      sin(theta * frequencySlider.value()) *
      sin(theta * frequencySlider2.value());
    let z =
      r *
      sin(theta * frequencySlider.value()) *
      cos(theta * frequencySlider2.value());
    vertex(x, y, z);
  }
  endShape(LINES);
}
