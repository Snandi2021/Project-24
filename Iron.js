class Iron{
	constructor(x,y)
	{
		var options={
			restitution:0.8,
			friction:3,
			density:30
		}
		this.width = 30;
        this.height = 60;
		this.body=Bodies.rectangle(x, y, 30, 60, options)
		World.add(world, this.body);
	}
	display()
	{
			var pos=this.body.position;		
			push();
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
            rect(0,0,this.width, this.height);
			

			pop()
	}

}