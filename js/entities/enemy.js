///////////////enemy///////////////////
class enemy extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 3;
		this.type = 'enemy';
		this.grafic_type = 'none';
		this.move_type = 'home';
		this.canShoot;
		this.shootTimer = new ytimer(20);
		this.rx;
		this.ry;
		this.wanderTimer = new ytimer(40);
	} //end constructor
	init() {
		super.init();

		this.rx = this.rand(this.world.wh.w);
		this.ry = this.rand(this.world.wh.h);
		if (this.move_type == 'shooter') {
			this.canShoot = true;
			// console.log('in init');
		}
	}
	update() {
		var t = this;
		super.update();
		t.collide('enemy', 0, 0);
		t.move2();
		t.hit_player();
		t.shoot();
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

	move2() {
		var t = this;
		var player = t.get_by_type('player')[0];
		if (t.move_type == 'home') {
			t.move_to(player);
		}
		if (t.move_type == 'wander' || t.move_type == 'shooter') {
			if (t.wanderTimer.finished()) {
				this.rx = t.rand(t.world.wh.w);
				this.ry = t.rand(t.world.wh.h);
			}
			var target = { x: t.rx, y: t.ry };
			t.move_to(target);
		}
	}
	hit_player() {
		var t = this;
		const p = t.hit_test('player');
		//if hit player and player is not invinsable
		if (p && !p.is_invinsable) {
			t.world.lives--;
			t.world.remove(this);
			p.sx(t.world.wh.w / 2);
			p.sy(t.world.wh.h / 2);
			p.start_invinsable = true;
		}
	}
	shoot() {
		var t = this;
		if (t.canShoot && t.shootTimer.finished()) {
			var p = t.get_by_type('player')[0];
			
			var b = new bullet(t.x, t.y);
			b.movement_type = 'angle';
			
			//calculate angle between enemy and player
			var dx = (t.x - p.x);
			var dy = (t.y - p.y);
			var a = Math.atan2(dy, dx);//radians
			//set bullet angle
			b.a = a;
			
			b.team = 'enemy';
			t.world.add(b);
			
			
		}
		// console.log(`${t.canShoot}, ${t.shootTimer.finished()}`);
	}
} //end class
///////////////end enemy///////////////////
