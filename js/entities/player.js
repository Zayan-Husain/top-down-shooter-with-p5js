///////////////player///////////////////
class player extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 19;
		this.type = 'player';
		this.grafic_type = 'none';
		this.shoot_timer = new ytimer(15);
		this.invinsable_timer = new ytimer(50);
		this.start_invinsable;
		this.is_invinsable;
		this.dir = "up";
		this.shot_dir = "up";
		this.lock_shot_dir;
		this.zi = 999;
	} //end constructor

	update() {
		var t = this;
		super.update();
		t.move();
		t.shot();
		t.boundaries();
		t.invinsable_do();
	} //end update
	
	render()
	{
		super.render();
		var t = this;
		
		if(t.is_invinsable)
		{
		  //draw ellipse
		  fill(204, 101, 192, 127);
		  stroke(127, 63, 120);
		  ellipse(t.x,t.y, 40, 40);
		}
	}//end render
	move() {
		var t = this;
		if (keyDown('W')) {
			t.move_by(0, -t.speed);
			t.dir = "up";
		}
		if (keyDown('S')) {
			t.move_by(0, t.speed);
			t.dir = "down";
		}
		if (keyDown('A')) {
			t.move_by(-t.speed, 0);
			t.dir = "left";
		}
		if (keyDown('D')) {
			t.move_by(t.speed, 0);
			t.dir = "right";
		}
		if (keyDown('Shift')) {t.shot_dir = t.shot_dir}
		else{t.shot_dir = t.dir;}
	}//end move 
	
	shot() 
	{
		var t = this;
		if (keyDown('M') && t.shoot_timer.finished() ) 
		{
			t.world.add(new bullet(t.x,t.y,t.shot_dir))
		}
	}//enf shot
	
	invinsable_do() 
	{	
		var t = this;
		//if started invisabilety
		if(t.start_invinsable)
		{
			t.log("in")
			//player is invinsable
			t.is_invinsable = true;
			//if timer is done
			if(t.invinsable_timer.finished())
			{
				//player is not invinsable
				t.is_invinsable = false;
				//end invinsabilety
				t.start_invinsable = false;
				//reset timer
				t.invinsable_timer = new ytimer(50);
			}
		}
	}//end ivinsable_do
	
	boundaries() {
		var t = this;
		var worldh = t.world.wh.h;
		var worldw = t.world.wh.w;
		if (t.y < 10) {
			t.sy(10);
		}
		if (t.y > worldh - 10) {
			this.sy(worldh - 10);
		}
		if (t.x < 10) {
			t.sx(10);
		}
		if (t.x > worldw - 10) {
			t.sx(worldw - 10);
		}
	}
} //end class
///////////////end player///////////////////
