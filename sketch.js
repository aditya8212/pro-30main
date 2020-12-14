const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const ma = Matter.Constraint;

var box1

function preload()
{
	backi = loadImage("pro29.jpg");
}

function setup() {
	var canvas=createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;
	
	//box pyramid 1.
	box1 = new Box(400,435);
	box2 = new Box(425,435);
	box3 = new Box(450,435);
	box4 = new Box(475,435);
	box5 = new Box(500,435);
	box6 = new Box(525,435);
	box7 = new Box(375,435);
	box8 = new Box(400,405);
	box9 = new Box(425,405);
	box10 = new Box(450,405);
	box11 = new Box(475,405);
	box12 = new Box(500,405);
	box13 = new Box(425,375);
	box14 = new Box(450,375);
	box15 = new Box(475,375);
	box16 = new Box(450,345);

	//box pyramid 2.
	box17 = new Box(805,280);
	box18 = new Box(830,280);
	box19 = new Box(855,280);
	box20 = new Box(880,280);
	box21 = new Box(905,280);
	box22 = new Box(830,250);
	box23 = new Box(855,250);
	box24 = new Box(880,250);
	box25 = new Box(855,220);

	polyg = new POLY();

	sling1 = new SlingShot(polyg.body,{x:100,y:300});

	gru1 = new GROUND(450,450,250);
	gru2 = new GROUND(850,300,200);
  
}

function draw(){
background("brown")
Engine.update(engine);

fill("black");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill("pink");
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill("green");
box13.display();
box14.display();
box15.display();
fill("yellow");
box16.display();

box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

box22.display();
box23.display();
box24.display();

box25.display();

gru1.display();
gru2.display();

polyg.display();
sling1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polyg.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
if(keyCode === 32){

	sling1.attach(polyg.body);

}
}