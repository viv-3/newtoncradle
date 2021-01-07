
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bO1,bO2, bO3, bO4, bO5;
var rO1,rO2, rO3, rO4, rO5;
var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Ground(500, 300, 200, 30)

	bO1 = new Bob(500-bobDiameter*2,500,bobDiameter)
	bO2 = new Bob(500-bobDiameter,500,bobDiameter)
	bO3 = new Bob(500,500,bobDiameter)
	bO4 = new Bob(500+bobDiameter*1,500,bobDiameter)
	bO5 = new Bob(500+bobDiameter*2,500,bobDiameter)

	rO1 = new Rope(bO1.body,roofObject.body,-bobDiameter*2,0)
	rO2 = new Rope(bO2.body,roofObject.body,-bobDiameter*1,0)
	rO3 = new Rope(bO3.body,roofObject.body,0,0)
	rO4 = new Rope(bO4.body,roofObject.body,bobDiameter*1,0)
	rO5 = new Rope(bO5.body,roofObject.body,bobDiameter*2,0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  
  drawSprites();
  
  bO1.display();
  bO2.display();
  bO3.display();
  bO4.display();
  bO5.display();
  rO1.display();
  rO2.display();
  rO3.display();
  rO4.display();
  rO5.display();
  roofObject.display();

 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bO1.body,bO1.body.position,{x:140,y:-140});
	}
}
//key pressed function if key code is up arrow  matter.body.applyforce(bO1{-x,-y})

