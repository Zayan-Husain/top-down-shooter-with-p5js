class game_world extends world {
	constructor(name2, wh2) {
		super(name2);
		this.wh = wh2;
		this.maxEnemies = 10;
		this.currentEnemies = 0;
	}

	init() {
		var p = new player(640 / 2, 200);
		var e = new enemy(640 / 2, 50);
		var s = new spawner(15, 480 / 2);
		var s2 = new spawner(620, 480 / 2);
		var s3 = new spawner(640 / 2, 480 / 2);
		e.move_type = 'wander';
		this.add(p);
		this.add(e);
		this.add(s);
		this.add(s2);
		this.add(s3);
	}
}
