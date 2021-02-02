  
class Bob {
    constructor(x, y, r) {


        var options = {
            restitution: 1,
            friction: 0.8,
            density: 0.8,
            isStatic: false

        }

        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
      
    }
    display() {
        push();
        fill("orange")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}