class game_over extends world {
	constructor(name2, wh2) {
		super(name2);
		this.wh = wh2;
	}
	init() {
		var t = this;
		super.init();
	}
	render() {
		var t = this;
		super.render();
		//text
		textSize(24);
		this.ytext(t.wh.w / 2, 22, 'Game Over!');
		//end text
	}
	update() {
		var t = this;
		super.update();
		if (keyDown('SPACE')) {
			this.change_world('game_world', true);
		}
	}
}
