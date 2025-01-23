class AssetManager {
	successCount = 0
	errorCount = 0
	cache = []
	downloadQueue = []

	constructor() {}

	queueDownload(path) {
		console.log(`Queueing ${path}`)
		this.downloadQueue.push(path)
	}

	isDone() {
		return this.downloadQueue.length === this.successCount + this.errorCount
	}

	downloadAll(callback) {
		if (this.downloadQueue.length === 0) {
			return setTimeout(callback, 10)
		}

		for (const downloadPath of this.downloadQueue) {
			const img = new Image()

			console.log(downloadPath)

			img.addEventListener('load', () => {
				console.log(`Loaded ${img.src}`)
				this.successCount++
				if (this.isDone()) callback()
			})

			img.addEventListener('error', () => {
				console.log(`Error loading ${img.src}`)
				this.errorCount++
				if (this.isDone()) callback()
			})

			img.src = downloadPath
			this.cache[downloadPath] = img
		}
	}

	getAsset(path) {
		return this.cache[path]
	}
}