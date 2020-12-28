class dustbin {
    constructor (x,y,width,height){
        var options={
            restitution:0
        }
        this.paper=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        
    }
    display(){
        var pos=this.paper.position;
        var angle=this.paper.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        fill ("white");
        rect(0,0,this.width,this.height);
    pop ();
    }
    }