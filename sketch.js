const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var groundObj;
var leftSide;
var rightSide; 
var ball;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	// creating ground and walls
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(350,600,20,240);
	rightSide = new Ground(700,600,20,240);

	//ball options
	var ball_options={
		isStatic:false,
		restitution:0.4,
		friction:0,
		density:1.2
	}
	//adding ball and adding to world
	ball = Bodies.circle(200,100,20,ball_options)
	fill("white");
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(1);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display();
  rightSide.display();
  leftSide.display();
  Engine.update(engine);
}	

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85, y:-85});
	}
}
