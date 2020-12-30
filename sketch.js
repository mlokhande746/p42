const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var drops=[];
var maxDrops=1000;

function preload(){
   bolt1=loadImage("images/thunderbolt/1.png");
   bolt2=loadImage("images/thunderbolt/2.png");
   bolt3=loadImage("images/thunderbolt/3.png");
   bolt4=loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(displayWidth/2,displayHeight);
   engine=Engine.create();
   world=engine.world;
    
   for(var i=0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400)));
   }

   umbrella=new Umbrella(displayWidth/4,displayHeight/2);


}

function draw(){
   background(0);
   //Engine.update(engine);
   
   umbrella.display();
   if(frameCount%20==0){
   for(var i=0;i<drops.length;i++){
      drops[i].display();
   }
}
   //drops.update();

   if(frameCount%12==0){
      var thunder=createSprite(displayWidth/2,displayHeight/4);
      
      var rand=Math.random(1,4);
      switch(rand){
         case 1:thunder.addImage("thunder",bolt1);
                break;
         case 2:thunder.addImage("thunder",bolt2);
                break;     
         case 3:thunder.addImage("thunder",bolt3);
                break;
         case 4:thunder.addImage("thunder",bolt4);
                break;
         default:break;          
      }
      thunder.scale=0.7;
      thunder.lifetime=50;
   }
}   

