

let x = 0;
let y = 0;

let up = false, down = false, left = false, right = false;

function setup() {
  createCanvas(960, 540);
  x = width/2;
  y = height/2;
}

function keyDown() {
  if(keyCode == UP) up = true;
  if(keyCode == DOWN) down = true;
  if(keyCode == LEFT) left = true;
  if(keyCode == RIGHT) right = true;
}

function keyUp() {
  if(keyCode == UP) up = false;
  if(keyCode == DOWN) down = false;
  if(keyCode == LEFT) left = false;
  if(keyCode == RIGHT) right = false;
}

var speed = 5;

function draw() { 
  if(up) y -= speed;
  if(down) y += speed;
  if(left) x -= speed;
  if(right) x += speed;
  
  background(0);
  fill(255);
  ellipse(x, y, 20, 20);
}
