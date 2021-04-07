
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,sling;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,40,30);
	mango2=new Mango(1000,100,40);
	mango3=new Mango(1120,130,30);
	mango4=new Mango(1200,160,30);
	mango5=new Mango(920,200,45);
	mango6=new Mango(1050,150,30);
	mango7=new Mango(1160,170,30);
	mango8=new Mango(997,220,30);
	mango9=new Mango(1200,230,30);
	mango10=new Mango(1100,220,30);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);

	stoneObj=new stone(200,350,30); 
	
	 sling= new launcher(stoneObj.body,{x:240,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();
  sling.display();
  groundObject.display();

  detectCollision(mango1,stoneObj);
  detectCollision(mango2,stoneObj);
  detectCollision(mango3,stoneObj);
  detectCollision(mango4,stoneObj);
  detectCollision(mango5,stoneObj);
  detectCollision(mango6,stoneObj);
  detectCollision(mango7,stoneObj);
  detectCollision(mango8,stoneObj);
  detectCollision(mango9,stoneObj);
  detectCollision(mango10,stoneObj);

}

function mouseDragged(){

    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    sling.fly();

}

function detectCollision(mango1,stone){

  var distance=dist(stone.body.position.x,stone.body.position.y, mango1.body.position.x, mango1.body.position.y)
 
  if(distance<=mango1.r+stone.r){

    Matter.Body.setStatic(mango1.body,false);

  }

}


function keyPressed(){

  if(keyCode===32){
      sling.attach(stoneObj.body);

  }

}