class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }


  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }

  shoot(){
    var rad2deg=180/3.14; 
    var deg2rad=3.14/180;
    Matter.Body.setStatic(this.body,false)
    var fromangle = p5.Vector.fromAngle((cannon.angle-20)*deg2rad)
    fromangle.mult(0.5)
    Matter.Body.setVelocity(this.body,{x:fromangle.x*rad2deg,y:fromangle.y*rad2deg})
    console.log("nnn")
    
  }
}
  