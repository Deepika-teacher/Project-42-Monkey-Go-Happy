var backImage,backgr;
var player, player_running;
var ground,ground_img;

var END =0;
var PLAY =1;
var gameState = PLAY;


function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

  foodGroup=new Group();
  obstacleGroup=new Group();
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  spawnObstacles();
  spawnBanana();
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }

  drawSprites();
}
function spawnBanana()
{
  if(frameCount % 80==0){
    //Create banana
    banana=createSprite(500,150,40,20);
    banana.velocityX=-4;
    banana.y=Math.round(random(120,200));
    banana.addImage("banana",bananaImage);
    banana.scale=0.05;
    
    //To avaoid memory leakage
    banana.lifetime=125;
    foodGroup.add(banana);
    
  }
}


function spawnObstacles()
{
  if(frameCount % 300==0){
    //Create banana
    obstacle=createSprite(500,340,40,20);
    obstacle.velocityX=-4;
   // obstacle.y=Math.round(random(120,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    
    //To avaoid memory leakage
    obstacle.lifetime=125;
    obstacleGroup.add(obstacle);
    
  }
}

