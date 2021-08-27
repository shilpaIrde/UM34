class Bob{
    constructor(x,y,diameter){
        var options = {
            isStatic:true,
            restitution:0.7,
            friction:1.0,
            density: 0.7
        }
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.body = Bodies.circle(x,y,diameter,options);
        //this.image = loadImage ("SPRITES/paper (1).png")
        //this.diameter = 50;
        
        World.add(world,this.body) 
    }

    display(){
        var pos = this.body.position;
       // var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
       // rectMode(CENTER)
        //image(this.image,0,0,50,50);
        fill("blue");
        circle(0,0,this.diameter);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}