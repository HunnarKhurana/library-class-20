var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  
  
  fixedRect.velocityY = 0;
}

function draw() {
  background(0,0,0);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  

if(isTouching(movingRect,fixedRect)){
movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
}
 else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

 } 

drawSprites();
}


