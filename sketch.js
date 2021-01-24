const Engine = Matter.Engine;                                                  
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ground, paper1, dustbinObject;

function setup() {
	createCanvas(1200,400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(80, 450, 70);
	ground = new Ground(600, 600, width, 20);
	dustbinObject = new Dustbin(1000, 580);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("black");

  ground.display();
  dustbinObject.display();
  paper1.display();

  Engine.run(engine);
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper1.body,false)
		   }  
	 }


