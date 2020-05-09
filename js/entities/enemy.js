///////////////enemy///////////////////
class enemy extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 9;
		this.type = 'enemy';
		this.grafic_type = 'none';
	} //end constructor

	update() {
		var t = this;
		super.update();
		t.collide('enemy', 0, 0);
		t.move();
	} //end update
	move() {
		var t = this;
		var player = t.get_by_type('player')[0];
		if (t.x < player.x) {
			t.move_by(t.speed, 0);
		}
		if (t.x > player.x) {
			t.move_by(-t.speed, 0);
		}
		if (t.y > player.y) {
			t.move_by(0, -t.speed);
		}
		if (t.y < player.y) {
			t.move_by(0, t.speed);
		}
	}
} //end class
///////////////end enemy///////////////////
