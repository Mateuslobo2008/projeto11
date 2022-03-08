var pathImg
var runnerImg
var barreira1
var barreira2
function preload(){
  //imagens pré-carregadas
 pathImg = loadImage("path.png");
 runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path=createSprite(200,200);
  
  Runner=createSprite(200,370);
  barreira1=createSprite(40,200,80,400);
  barreira2=createSprite(360,200,130,400)
  path.addImage(pathImg);
  Runner.addAnimation("runnerImg",runnerImg);
  Runner.scale = 0.05
  path.velocityY = 5
  barreira1.visible = false;
  barreira2.visible = false;
 bordas=createEdgeSprites();

}
  

function draw() {
  
   
  background(0);
  if(Runner.y > 360){
    Runner.y = 360
  }
  console.log(Runner.y)
  Runner.x = mouseX
   Runner.bounceOff(bordas);
  if(path.y > 400 ){

    path.y = height/2;
  }
  Runner.bounce(barreira1);
  Runner.bounce(barreira2);
  drawSprites();
}
