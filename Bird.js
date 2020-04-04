class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    //load the smake image
    this.smokeImage = loadImage("sprites/smoke.png");
    //create an array
    this.trajectory = [];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    //show the tarjectory when the bird moves
    if (this.body.position.x > 200 && this.body.speed > 10) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }


    for (var i = 0; i < this.trajectory.length; i++) {
      //draw the image
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);

    }



  }
}