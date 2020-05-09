///////////////player///////////////////
class player extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 19;
		this.type = 'player';
		this.grafic_type = 'none';
	} //end constructor

	update() {
		var t = this;
		super.update();
		t.move();
		t.boundaries();
	} //end update
	move() {
		var t = this;
		if (keyDown('W')) {
			t.move_by(0, -t.speed);
		}
		if (keyDown('S')) {
			t.move_by(0, t.speed);
		}
		if (keyDown('A')) {
			t.move_by(-t.speed, 0);
		}
		if (keyDown('D')) {
			t.move_by(t.speed, 0);
		}
	}
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
