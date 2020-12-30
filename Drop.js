class Drop{
    constructor(x,y){
        var options={
            restitution:0.4,
            friction:0.1
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.drop=Bodies.circle(x,y,this.r,options);
        World.add(world,this.drop);
    }

    update(){
        if(this.drop.positon.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)});
        }
    }
    display(){

        var pos=this.drop.position;
        var angle=this.drop.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
    }
}