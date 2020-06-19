const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var dustbin;
var ball;
var ground

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
	world = engine.world;

	ball = new Ball(400,200,30);
	dustbin = new Bin(800,300,10,100);
	dustbin1 = new Bin(800,400,100,10);
	dustbin2 = new Bin(890,300,10,100);
	console.log(dustbin);
	
	var options ={
		isStatic: true
	}

	ground = Bodies.rectangle(600,370, 1200, 10, options);
	World.add(world, ground);
}

function draw () {
	background(225,225,0);

	Engine.update(engine);

	ball.display();
	dustbin.display();
	dustbin1.display();
	dustbin2.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85})
	}
}