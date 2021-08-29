
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 
roof= new Roof(200,400,100,20);
rope1= new Rope(bob1.body,roof.body, bobDiameter*2, 0)
bob1= new Bob(20,200,160);
rope2= new Rope(bob2.body,roof.body, bobDiameter*2, 0)
bob2= new Bob(20,200,180);
rope3= new Rope(bob3.body,roof.body, bobDiameter*2, 0)
bob3= new Bob(20,200,200);
rope4= new Rope(bob4.body,roof.body, bobDiameter*2, 0)
bob4= new Bob(20,200,220);
rope5= new Rope(bob5.body,roof.body, bobDiameter*2, 0)
bob5= new Bob(20,200,240);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



