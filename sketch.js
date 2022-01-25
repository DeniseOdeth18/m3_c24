const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,background;

var canvas, angle, tower, ground, cannon;
var score = 0;
//VAR BALLS

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  //ANGLE
  angleMode(DEGREES);
  angle = 15;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  //crear objeto cannon
  cannon= new Cannon (180, 110, 130, 100, angle);
  //cannonBall = new CannonBall(cannon.x, cannon.y);
 
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  //background(189);
 
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  //rect(tower.position.x, tower.position.y, 160,310);

  push();
  imageMode(CENTER);
  //rect(tower.position.x, tower.position.y, 160,310);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();

  //for
  //for (var i = 0; i < balls.length; i++) {
    
  //}

  //display de cannon para verlo en pantalla
  cannon.display();
  //cannonBall.display();
   
}

function showCannonBalls(ball,i) {
  //condicion
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    //cannonBall.shoot();
    
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
   
  }
}



