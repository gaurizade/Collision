
var fixedrect, movrect;

function setup() {
  createCanvas(800,400);
  fixedrect =  createSprite(400, 200, 150, 50);
  fixedrect.shapeColor = "purple"
  movrect =  createSprite(200, 200, 50, 150);
  movrect.shapeColor = "purple";

  fixedrect.debug=true;
  movrect.debug=true;
}

function draw() {
  background("blue"); 
  movrect.x = World.mouseX;
  movrect.y = World.mouseY; 

  if(movrect.x-fixedrect.x < movrect.width/2 + fixedrect.width/2
    && fixedrect.x-movrect.x < movrect.width/2 + fixedrect.width/2
    && movrect.y-fixedrect.y < movrect.width/2 + fixedrect.width/2
    &&  fixedrect.y-movrect.y < movrect.width/2 + fixedrect.width/2) {
    fixedrect.shapeColor ="red";
    movrect.shapeColor = "red";
  }
  else {
    fixedrect.shapeColor ="green";
    movrect.shapeColor = "green";
  }
  drawSprites();
}