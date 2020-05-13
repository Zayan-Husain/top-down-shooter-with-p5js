class game_world extends world {
	constructor(name2, wh2) {
		super(name2);
		this.wh = wh2;
		this.maxEnemies = 10;
		this.currentEnemies = 0;
		this.lives = 3;
		this.levels = [ [ 'wander' ], [ 'wander', 'home' ], [ 'wander', 'home', 'shooter' ] ];
		this.currentLevel = 0;
		this.killCount = 0;
	}

	init() {
		var t = this;
		t.lives = 3;
		t.entitys = [];
		t.currentEnemies = 0;
		var p = new player(640 / 2, 200);
		var e = new enemy(640 / 2, 50);
		var s = new spawner(15, 480 / 2);
		var s2 = new spawner(620, 480 / 2);
		var s3 = new spawner(640 / 2, 480);
		e.move_type = 'shooter';
		this.add(p);
		this.add(e);
		// this.add(s);
		// this.add(s2);
		// this.add(s3);
	}

	update() {
		super.update();
		var t = this;
		if (t.lives <= 0) {
			t.change_world('game_over', true);
		}
		t.nextLevel();
	}
	spawnEnemy(spawner2, type2) {
		var t = this;
		var e = new enemy(spawner2.x, spawner2.y);
		e.move_type = type2;
		t.add(e);
	}
	render() {
		super.render();
		var t = this;
		t.ytext(50, 30, 'lives: ' + t.lives);
		t.ytext(50, 60, 'Level: ' + (t.currentLevel + 1));
	} //end render
	nextLevel() {
		if (this.killCount >= this.maxEnemies) {
			this.currentEnemies = 0;
			this.currentLevel++;
			this.killCount = 0;
		}
	} // end next level
}
