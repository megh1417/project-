var weight, speed, thickness;
var bullet, wall;
var lbullet,lwall;

function setup() {
  createCanvas(1600,400);
 

  speed= random(55,99);
  thinknes= random(22,83);
  weight= random(400,1500);


  bullet= createSprite(50, 200,70, 50);
  bullet.velocityX= speed;
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor= "yellow";
}

function draw() {
  background("black");  

  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor="green";
    }

    if (damage<10){
      wall.shapeColor="red";
    }
  }
  

  
  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletrightedge= lbullet.x+lbullet.width;
  wallleftedge=lwall.x;
  if (bulletrightedge>=wallleftedge){
    return true 
  }
  return false;
}