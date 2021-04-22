
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper,ground;
var dustbin1,dustbin2;
var dustbinImg;


function preload()
{
	
}
                                                                                                               
function setup() {
createCanvas(800, 597);
engine = Engine.create();
world = engine.world;
Engine .run(engine);

  paper = new Paper(100,300,10);
 
	ground = new Ground();

	dustbin = createSprite(550,576,140,10);
	dustbin1 = createSprite(480,535,10,80);
	dustbin2 = createSprite(623,535,10,80);
 
    
	dustbin1.shapeColor = "white";
	dustbin2.shapeColor = "white";
    dustbin.shapeColor = "white";



World.add(world,ground);

}


function draw() {
  rectMode(CENTER);
  background("black");
 background(0);




paper.display();
ground.display();

   drawSprites();
 
}



function keyPressed(){
	if (keyCode === 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{
		
			x  : 10,
			y : -12
		}	)
	}}

	

