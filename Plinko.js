class Plinko {
    constructor(x,y, r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r, options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){

      translate(this.body.position.x, ths,body.position.y);
      ellipseMode(CENTER);
      fill("white");
      ellipse(this.body.position.x, this.body.position.y, this.r);
    }
  };