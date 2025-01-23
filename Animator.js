class Animator {
	spritesheet = null
	xStart = 0
	yStart = 0
	width = 0
	height = 0
	frameCount = 0
	elapsedTime = 0
	frameDuration = 0
	totalTime = 0

	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
		this.spritesheet = spritesheet
		this.xStart = xStart
		this.yStart = yStart
		this.width = width
		this.height = height
		this.frameCount = frameCount
		this.frameDuration = frameDuration

		this.totalTime = frameCount * frameDuration
	}

	drawFrame(tick, ctx, x, y, scale) {
		this.elapsedTime += tick
		const frame = this.currentFrame()

		ctx.drawImage(
			this.spritesheet,
			this.xStart + this.width * frame, this.yStart, this.width, this.height,
			x, y, this.width * 3, this.height * 3
		)
	}

	currentFrame() {
		// Ensure no division by 0
		if (this.frameDuration == 0) {
			return 0
		}

		// Return the current frame
		return Math.floor((this.elapsedTime % this.totalTime) / this.frameDuration)
	}

	isDone() {
		return this.elapsedTime >= this.totalTime
	}
}