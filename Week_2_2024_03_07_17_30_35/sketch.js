class Snowflake {
  constructor() {
    
    this.pos = createVector(random(width), random(-100, -10));
    
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.angle = random(TWO_PI); 
    this.dir = (random() < 0.5) ? 1 : -1; 
    this.xOff = 0; 
  }

  applyForce(force) {
    
    this.acc.add(force);
  }

  update() {
  this.xOff = sin(this.angle) * 2; 

  
  this.angle += this.dir * 0.01;

  
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0); 

  
  if (this.pos.y > height - 50) {
    this.pos.y = height - 50;
    this.vel.y = 0;
    this.acc.y = 0;
  }
}



  display() {
    
    push();
    translate(this.pos.x + this.xOff, this.pos.y);
    rotate(this.angle);
    noStroke();
    fill(255);
    ellipse(0, 0, 5, 5); 
    pop();
  }
}

let snowflakes = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(240);
  noStroke();
}

function draw() {
  background(135, 204, 255); 

  let gravity = createVector(0, 0.03); 

  
  fill(100); 
  noStroke();
  rect(0, height - 50, width, 50);
  

  
  for (let flake of snowflakes) {
    flake.applyForce(gravity);
    flake.update();
    flake.display(); 
  }

  
  if (frameCount % 10 === 0) {
    snowflakes.push(new Snowflake());
  }
}