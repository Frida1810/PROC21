var boy, boyRunning, boyCollided;
var bat, rock1, rock2, rock3, grave;
var batImg, rock1Img, rock2Img, rock3Img, graveImg;
var wallpaper, wallpaperImg, invisibleGround;

var gameOverImg, restartImg;
var gameOver, restart;
var score;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
boyRunning = loadAnimation("boy1.PNG", "boy2.png");
boyCollided = loadAnimation("boyx.png");

wallpaperImg = loadImage("background.png");

batImg = loadImage("bat.PNG");
rock1Img = loadImage("rock1.PNG")
rock2Img = loadImage("rock2.PNG")
rock3Img = loadImage("rock3.PNG")
graveImg = loadImage("grave.PNG")

gameOverImg = loadImage("gameOver.png");
restartImg = loadImage("restart.png");

}

function setup(){
 createCanvas(windowWidth, windowHeight);

 boy = createSprite(50,height-70,20,50);
 boy.addAnimation("running", boyRunning);
 boy.addAnimation("collided", boyCollided);
 boy.scale = 0.5

 wallpaper = createSprite (width/2,height);
 wallpaper.addImage("wallpaper", wallpaperImg);
 wallpaper.x = wallpaper.width/2;
 

 gameOver = createSprite(width/2,height/2- 50);
 gameOver.addImage(gameOverImg);
 gameOver.scale =0.5

 restart = createSprite(width/2,height/2);
 restart.addImage(restartImg);
 restart.scale = 0.5;

 invisibleGround = createSprite (width/2,height-10,width,125);
 invisibleGround.shapeColor = "#f4cbaa";
 invisibleGround.visible = false;

 score = 0
}

function draw(){
 background(0)
 textSize(15);
 fill("white")
 text("Puntuación: "+ score,30,50);

 if(gameState === PLAY){
    gameOver.visible = false
    restart.visible = false
    wallpaper.velocityX = -4
    score = score + Math.round(frameCount/50);

      
      if(keyDown("space")&& boy.y >= height-120) {
        boy.velocityY = -10;
      }

      if(wallpaper.x < 0){
        wallpaper.x = wallpaper.width/2;
      }


    boy.velocityY = boy.velocityY + 0.5
}
else if (gameState === END) {
    wallpaper.velocityX = 0;
    boy.velocityX = 0;
    
    gameOver.visible = true;
    restart.visible = true;

    boy.changeAnimation("collided", boyCollided);

 }

 wallpaper.collide(invisibleGround);
 drawSprites()
}


function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;

    boy.changeAnimation("running",boyRunning);
        
    score = 0;
        
   }