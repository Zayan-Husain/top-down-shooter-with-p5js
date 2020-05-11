///////////////bullet///////////////////
class bullet extends yentity {
	constructor(x2, y2, dir2, g) {
		super(x2, y2, g);
		this.speed = 4;
		this.type = 'bullet';
		this.grafic_type = 'none';
		this.dir = dir2;
		this.team = 'player';
		this.speed = 15;
	} //end constructor

	update() {
		var t = this;
		super.update();
		t.move();
		t.hit();
	} //end update

	move() {
		var t = this;
		if (t.dir == 'up') {
			t.move_by(0, -t.speed);
		}
		if (t.dir == 'down') {
			t.move_by(0, t.speed);
		}
		if (t.dir == 'left') {
			t.move_by(-t.speed, 0);
		}
		if (t.dir == 'right') {
			t.move_by(t.speed, 0);
		}

		//outside of screen
		if (t.x < 0 || t.x > t.world.wh.w || t.y < 0 || t.y > t.world.wh.h) {
			t.world.remove(this);
		}
	} //end move

	hit() {
		var t = this;
		var e = t.hit_test('enemy');
		if (e && t.team == 'player') {
			console.log(e);
			t.world.remove(e);
			t.world.remove(this);
		}
	}
} //end class
///////////////end bullet///////////////////
