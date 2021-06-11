
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg,boy,rope,tree,mango1;

function preload()
{
 
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   ground=new Ground(800,600,1600,15)
  
    boy=new Boy(300,482,150,220)
  
   stoneobj=new Stone(240,450,25)

   rope=new Target(stoneobj.body,{x:240,y:440})

   tree=new Tree(1300,400,450,400)

   mango1=new Mango(1450,310,70)
   mango2=new Mango(1360,340,70)
   mango3=new Mango(1310,270,70)
   mango4=new Mango(1230,320,70)
   mango5=new Mango(1150,350,70)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("grey");
  ground.display();
  tree.display();
  boy.display();
  rope.display();
  stoneobj.display();

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  drawSprites();

  detectCollision(stoneobj,mango1)
  detectCollision(stoneobj,mango2)
  detectCollision(stoneobj,mango3)
  detectCollision(stoneobj,mango4)
  detectCollision(stoneobj,mango5)
 fill(0)
 textSize(20)
 text("press space for a second chance to play",200,100)
}

function mouseDragged(){
  Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneobj.body,{x:240,y:440})
      rope.attach(stoneobj.body);
  }
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distence=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distence<=lmango.r+lstone.r) {
  Matter.Body.setStatic(lmango.body,false)
}
}