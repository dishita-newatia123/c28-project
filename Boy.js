class Boy {
    constructor(x, y, width, height){

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
      this.image = loadImage("boy.png");
    }
    display() {

        var paperpos=this.body.position;
        
        push()
        translate(paperpos.x,paperpos.y)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
        
        }
  };
  