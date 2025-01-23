class Yoshi {
	animator = new Animator(
		ASSET_MANAGER.getAsset('./yoshi.png'),
		0, 145, 32, 45, 10, 0.2
	)
	game = null
	x = -96
	y = 10
	speed = 15

	constructor(game) {
		this.game = game
	}

	update() {
		if (this.x >= CANVAS_WIDTH) {
			this.x = -96
			return
		}

		this.x += this.speed * this.game.clockTick
	}

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
	}
}