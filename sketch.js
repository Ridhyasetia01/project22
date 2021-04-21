var starImg,bgImg;
var star, starBody;
var fairy, fairyImg,fairy1;
var fairyVoice,fairybody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairy1=loadImage("images/fairy.png");
	fairyVoice=loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(200,500);
	fairy.addImage(fairy1);
	fairy.addAnimation(fairyImg);
	fairy.scale =0.3;
	
	engine = Engine.create();
	world = engine.world;

	
	fairybody = Bodies.circle(100 , 400 , 700 , {restitution:0.5, isStatic:true});
    World.add(world,fairybody);

	
    
	

     

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.x= fairybody.position.x 
  fairy.y= fairybody.position.y 

  console.log(star.y);

  Engine.update(engine);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

   if(keyCode === RIGHT_ARROW){
	   fairy.x=fairy.x+5;
	
   }

   if(keyCode === LEFT_ARROW){
	fairy.x=fairy.x-5;
 
}
	
}
