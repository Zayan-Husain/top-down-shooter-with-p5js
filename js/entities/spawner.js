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
		var CL = w.currentLevel;
		if (CL > w.levels.length - 1) {
			w.currentLevel = 0;
		}
		var levelR = w.levels[CL];
		var maxE = w.maxEnemies;
		var currentE = w.currentEnemies;
		if (t.spawnTimer.finished() && currentE <= maxE) {
			w.currentEnemies++;
			var randEnemyType = Math.floor(this.rand(levelR.length)) - 1;
			var enemyType = levelR[randEnemyType];
			console.log(enemyType + ', ' + randEnemyType);
			w.spawnEnemy(this, enemyType);
		}
	}
} //end class
///////////////end spawner///////////////////
