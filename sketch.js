const Engine = Matter.Engine;                                                  
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ground,paper;

function setup() {
	createCanvas(1200,400);
	
	ground=new Ground (600,6,1200,20);
	dustbin1=new dustbin(400,655,200,20);
	dustbin2=new dustbin(290,615,20,100);
	dustbin3=new dustbin(510,615,20,100);

	paper=createSprite(width/2, 80, 10,10);
	
	engine = Engine.create();
	world = engine.world;

	paper = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, paper);
	
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("black");
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y 
  Engine.run(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.setStatic(paper,false)
		   }  
	 }


