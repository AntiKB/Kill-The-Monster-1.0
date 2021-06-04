class Platform{
    constructor(x,y,width,height){
      var Options = {
          'isStatic':true
      }
      this.body = Bodies.rectangle(x,y,width,height,Options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
    }
    display() {  
      var angle = this.body.angle;
      var Position = this.body.position;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("BLACK");
      rect(0,0,this.width,this.height);
      pop();
    }
  }