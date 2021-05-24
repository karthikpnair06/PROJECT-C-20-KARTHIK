var bgImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
   bgImg=loadImage("images/garden.png");
   catImg1=loadImage("images/cat1.png");
   mouseImg1=loadImage("images/mouse1.png");
   catImg2=loadAnimation("images/cat2.png","images/cat3.png");
   mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
   catImg3=loadImage("images/cat4.png");
   mouseImg3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);   
    //create tom and jerry sprites here
   cat=createSprite(800,650);
   cat.addImage(catImg1);
   cat.scale=0.2;
   cat.debug=false;

   mouse=createSprite(150,660);
   mouse.addImage(mouseImg1);
   mouse.scale=0.12;
   mouse.debug=false;
}

function draw() {

    background(bgImg);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.addAnimation("cathappy",catImg3);
        mouse.addAnimation("mousehappy",mouseImg3);
        cat.velocityX=0;
        cat.X=600;
        mouse.X=300;
        cat.changeAnimation("cathappy");
        mouse.changeAnimation("mousehappy");
        }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay=25;

      cat.addAnimation("catcatching",catImg2);
      cat.changeAnimation("catcatching");
      cat.velocityX= -2;
  }
      
  }

