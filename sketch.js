var iss,spacecraft,hasDocked=false;

function preload(){
  issImage = loadImage("Docking-undocking/iss.png")
  spacebgImage = loadImage("Docking-undocking/spacebg.jpg")
  spaceCraf1 = loadImage("Docking-undocking/spacecraft1.png")
  spaceCraf2 = loadImage("Docking-undocking/spacecraft2.png")
  spaceCraf3 = loadImage("Docking-undocking/spacecraft3.png")
  spaceCraf4 = loadImage("Docking-undocking/spacecraft4.png")

}


function setup() {
  createCanvas(1000,700);
  spacecraft = createSprite(100,300,50,50)
  spacecraft.addImage("animation",spaceCraf1);
  spacecraft.scale= 0.3
  
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage);

}

function draw() {
  background(spacebgImage);  
  drawSprites();

  if(!hasDocked){
     spacecraft.x = Math.round(random(320,340))
     text("x: "+ mouseX + " y: "+ mouseY,mouseX,mouseY);
    
     if(keyDown(RIGHT_ARROW)){
        spacecraft.addImage(spaceCraf4);
        spacecraft.x =  spacecraft.x + 2;
     }
     if(keyDown(LEFT_ARROW)){
        spacecraft.addImage(spaceCraf3);
        spacecraft.x =  spacecraft.x - 2;
     }
     if(keyDown(DOWN_ARROW)){
        spacecraft.addImage(spaceCraf2);
     }
     if(keyDown(UP_ARROW)){
      spacecraft.addImage(spaceCraf1);
      spacecraft.y =  spacecraft.y - 2;
   }   
  }

  if(spacecraft.x <=350 && spacecraft.y <=280){
      hasDocked=true;
      textSize(20);
      fill("white");
      text("DOCKING SUCESSFULL" , 300,600);
  }
}
