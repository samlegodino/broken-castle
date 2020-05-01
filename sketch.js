var tower1,tower2,tower3,tower4;

function setup() {
  createCanvas(1200,800);
  tower1=createSprite(350,400,30,120);
  tower1.shapeColor="red";
  tower2=createSprite(500,400,30,120)
  tower2.shapeColor="red"
  tower3=createSprite(480,370,80,20);
  tower3.shapeColor="red"
  tower4=createSprite(500,500,80,20)
  drawSprites();
}