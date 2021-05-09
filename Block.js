class Block {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }

      //this.visibility=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //if(this.body.speed<3){

      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      //fill("lightblue");
      rect(0, 0, this.width, this.height);
          pop();}
      //else{
        //World.remove(world,this.body)
      //push();
        //this.visibility=this.visibility-5;
        //tint(255,this.visibility);
        //pop();
      //}
    //}
  };