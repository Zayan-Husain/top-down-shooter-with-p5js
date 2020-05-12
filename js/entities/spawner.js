///////////////spawner///////////////////
class spawner extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 4;
		this.type = 'spawner';
		this.spawnTimer = new ytimer(60);
		this.grafic_type = 'none';
	} //end constructor

	update() {
		var t = this;
		super.update();
		t.spawn();
	} //end update

	spawn() {
		var t = this;
		var w = t.world;
		var maxE = w.maxEnemies;
		var currentE = w.currentEnemies;
		if (t.spawnTimer.finished() && currentE <= maxE) {
			w.currentEnemies++;
			var randEnemyType = this.rand(9) + 1;
			var enemyType = '';
			if (randEnemyType <= 5) {
				enemyType = 'home';
			} else enemyType = 'wander';
			w.spawnEnemy(this, enemyType);
		}
	}
} //end class
///////////////end spawner///////////////////
