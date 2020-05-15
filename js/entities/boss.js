class Boss extends enemy {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		var t = this;
		t.hp = 10;
		t.max_hp = t.hp;
		t.grafic_type = 'none';
		// lets do 2 for now and debugging purposes
		t.set_wh(100, 100);
		t.sethb_wh(100, 100);
		t.type = 'boss';
		this.canShoot=true;
		this.shootTimer = new ytimer(20);
		this.bullet_speed = 10;
	}

	init() {
		var t = this;
		super.init();
		t.speed = 1;
	}
	update() {
		super.update();
		var t = this;
		t.world.ytext(t.x, t.y + 20, 'Boss');
	}
	takeDamage(dmg) {
		var t = this;
		this.hp -= dmg;
		if (this.hp <= 0) {
			t.world.change_world('game_over');
		}
	}//end take damege
	shoot() 
	{
		super.shoot();
		var t = this;
		//second shooting stage when hp is half
		if(t.hp == t.max_hp/2){}
	}//end shot
}
