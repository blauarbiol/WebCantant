function setup() {
  createCanvas(240, 60).parent('logo');
}

function draw() {
  background(43, 48, 53);
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle("bold");
  fill(color("white"));
  textFont("Cactus Classical Serif");
  text("Harry Styles", width/2, height/2);
}