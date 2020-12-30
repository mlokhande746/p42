class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
    this.x=x;
    this.y=y;
    this.r=20;
    this.body=Bodies.circle(x,y,this.r,options);
    this.image=loadImage("images/Walking Frame/walking_1.png"); 
    this.image.scale=4;   
    World.add(world,this.body);
    }

display(){
    var pos=this.body.position;

    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image,0,0,this.r,this.r);
    ellipse(0,0,this.r,this.r);
    pop();
}
}