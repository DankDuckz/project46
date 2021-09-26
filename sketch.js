var backgroundImg, characterImg, triImg, gemImg, gameOverImg
var bg, character, gem, gameOver, progress
var obstacles
var gameState = 1
var score = 0

function preload() {
  backgroundImg = loadImage("assets/background1.jpeg")
  characterImg = loadImage("assets/character.png")
  triImg = loadImage("assets/Triangle.png")
  gemImg = loadImage("assets/gem.gif")
  gameOverImg = loadImage("assets/gameOver2.gif")
}

function setup() 
{
  createCanvas(1200,600);
  
  character = createSprite(200,550)
  character.addImage(characterImg)
  character.scale = 0.2

  gameOver = createSprite(width/2,height/2)
  gameOver.addImage(gameOverImg)
  gameOver.visible = false
  
  obstacles = new Group()
}

function draw() 
{
  background(backgroundImg)

  if (gameState == 1) {
    rectMode(CENTER)
    rect(width/2,50,300,25)
    rectMode(CORNER)
    fill("blue")
    rect(450,38,score,25)

    if (frameCount % 5 == 0) {
      score += 1
    }
  
    ground = createSprite(width/2,height-10,width,20)
    character.collide(ground)

    if (keyWentDown(UP_ARROW) && character.y > 540) {
      character.velocityY = -15
    }

    character.velocityY += 0.4
  }
  else {
    character.changeAnimation("gameOver")
    gameOver.visible = true
  }
  drawSprites()
  
}

function startGame() {

}
