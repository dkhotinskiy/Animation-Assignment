const gameEngine = new GameEngine()

const ASSET_MANAGER = new AssetManager()
const CANVAS_HEIGHT = 155
const CANVAS_WIDTH = 650

ASSET_MANAGER.queueDownload('./yoshi.png')

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById('gameWorld')
	canvas.height = CANVAS_HEIGHT
	canvas.width = CANVAS_WIDTH

	const ctx = canvas.getContext('2d')
	ctx.imageSmoothingEnabled = false

	gameEngine.addEntity(new Yoshi(gameEngine))

	gameEngine.init(ctx)

	gameEngine.start()
})