class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,50,50);
    var options= {
        restitution : 0.8,
    friction : 1.5,
    density : 2.0,
    isStatic:false


  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  //this.Visiblity = 255;
}
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
       
       if(this.body.speed > 1){
        super.display();
        Visibility.display();
          
      this.body = Bodies.rectangle();
      this.Visiblity = this.Visiblity - 15;
      
    }
      else{
        
        push();
        World.remove(world, this.body);
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity); 
        pop();
         
      }
      
      };
      

    }