class Box{

    constructor (x,Y,width,height){

        var options = {isStatic: true}
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        this.width = width;
        this.height = height;

    }
