function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 80);
  b=createSprite(200, 200, 80, 30);
  a.debug = true;
  b.debug = true;
}

function draw() {
  background(255,255,255);  
  a.x=World.mouseX;
  a.y=World.mouseY;
  if (a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<b.height/2+a.height/2 && b.y-a.y<a.height/2+b.height/2) {
    a.shapeColor = "red";
    b.shapeColor = "red";
    a.x = 400;
    a.y = 400;
  }
  else {
    a.shapeColor = "blue";
    b.shapeColor = "blue";
  }
  console.log(a.x-b.x);
  drawSprites();
}