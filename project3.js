unction setup() {
  createCanvas(1300, 1300);
  background("rgb(131,93,214)");
}

function draw() {
  //below
  noStroke(0);
  fill("rgb(46,176,202)");
  ellipse(mouseX, mouseY, 45, 45);
}

function mousePressed(){
  background("rgb(131,93,214)")
}