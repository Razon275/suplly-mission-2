class Redzone{
    constructor(x,y,width,height){
        
       this.body=Bodies.rectangle(x,y,width,height);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
       boxPosition=width/2-100;
       boxY=610;
    }
    
}