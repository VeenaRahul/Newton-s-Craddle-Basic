
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof ();

	bob1 = new Bob(400, 200);
	rope1 = new Rope ({x: 400, y: 100}, bob1.body);

	bob2 = new Bob(360, 200);
	rope2 = new Rope ({x: 360, y: 100}, bob2.body);

	Engine.run(engine);
  
}


function draw() {
 
  background("lightblue");
  
  roof.display();

  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob2.body, bob2.body.position, {x: -0.05, y:0});
	}
}



