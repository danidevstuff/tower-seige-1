class Box {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.body = Matter.Bodies.rectangle(x,y,40,60,{isStatic:false});
        World.add(world , this.body);
        
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, 40,60);
        pop();
    };
};