var bckgd,bckgdimg;
var fighter,fighterimg,fighterimg2;
var bulletsimg;
var fighterplanesGroup,fighterplanesGroup2;
var fighterplanesimg; 
var bulletsGroup,enemybulletsGroup;
var score=0;
function preload(){
  bckgdimg=loadImage("images/space.png");
  fighterimg=loadImage("images/fighter.png");
  fighterplanesimg2=loadImage("images/fighter2 (2).png");
  bulletsimg=loadImage("images/bullets.png");
      fighterplanesimg=loadImage("images/fighterdense.png");
}
function setup() {
  createCanvas(400, 400);
  bckgd= createSprite(300,300,600,600);
  bckgd.addImage(bckgdimg);
  bckgd.velocityY=1;
  bckgd.scale=1.5;
  
  fighter=createSprite(300,350,5,5);
  fighter.addImage(fighterimg);
  fighter.scale=0.2
  
  fighterplanesGroup=new Group();
  fighterplanesGroup2=new Group();
  bulletsGroup=new Group();
  enemybulletsGroup=new Group();
}

function draw() {
  background("white");
  fighter.x=mouseX;

  if (bckgd.y > 400){
   bckgd.y = 200;
  }
  if (keyDown("space")) {
   createbullets();   
  }
  if (World.frameCount % 300 === 0) {

  fighterplanes1();

  }
  if (World.frameCount % 400 === 0) {

  
  fighterplanes2();
  }
  if(bulletsGroup.isTouching(fighterplanesGroup)) {
    bulletsGroup.destroyEach();
    fighterplanesGroup.destroyEach();
    score=score+3;
  }
   if(bulletsGroup.isTouching(fighterplanesGroup2)) {
    bulletsGroup.destroyEach();
    fighterplanesGroup2.destroyEach();
    score=score+3;
  }

  drawSprites();
 fill("yellow");
 text("Score :"+score,200,20);
}
function createbullets() {
   if (World.frameCount %  3  === 0){
  var bullets= createSprite(100, 100, 60, 10);
  bullets.addImage(bulletsimg);
  bullets.x = mouseX;
  bullets.y=fighter.y;
  bullets.velocityY = -4;
  bullets.lifetime = 100;
  bullets.scale = 0.1;
  bulletsGroup.add(bullets);
}
   
}
function createnemybullets() {
  var enemybullets= createSprite(fighterplanes2.x, fighterplanes2.y, 60, 10);
  enemybullets.addImage(bulletsimg);
  enemybullets.x = fighterplanes2.x;
  enemybullets.y=fighterplanes2.y;
  enemybullets.velocityY = 4;
  enemybullets.lifetime = 100;
  enemybullets.scale = 0.1;
  enemybulletsGroup.add(enemybullets);
  
   
}
function fighterplanes1() {
   
  var fighterplanes =    createSprite(30,Math.round(random(20, 200)), 10, 10);
  fighterplanes.addImage(fighterplanesimg);
 // fighterplanes.velocityX = 3;
  fighterplanes.lifetime = 150;
  fighterplanes.scale = 0.3;
  fighterplanesGroup.add(fighterplanes);
     
}
function fighterplanes2() {

  var fighterplanes2 =    createSprite(Math.round(random(100, 200)),0, 10, 10);
  fighterplanes2.addImage(fighterplanesimg2);
  fighterplanes2.velocityY = 3;
  fighterplanes2.lifetime = 150;
  fighterplanes2.scale = 0.2;
  fighterplanesGroup2.add(fighterplanes2);
  createnemybullets();
}