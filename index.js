class Progress {

	data   = []
	passed = []
	error  = []
	colors = {
		black  : '\x1b[40m',
		red    : '\x1b[41m',
		green  : '\x1b[42m',
		yellow : '\x1b[43m',
		blue   : '\x1b[44m',
		magenta: '\x1b[45m',
		cyan   : '\x1b[46m',
		white  : '\x1b[47m',
	}

	constructor(data) {
		this.data = data
	}

	config(config) {
		this.percentage = config.percentage || true
		this.percentageColor = config.percentageColor || '\x1b[47m'
		this.barColor   = config.barColor || '\x1b[47m'
		this.railColor  = config.railColor || '\x1b[40m'
		return this
	}

	async run(index = 0) {
		try {
			const passed = await this.data[index]()
			this.passed.push(passed)
		} catch {
			const error = `\n\nError : ${typeof this.data[index]} ${this.data[index]} is not a function at index:${index}`
			this.error.push(error)
		}

		const percentage = parseInt((index + 1) * (100 / this.data.length))

		let [bar, rail] = [this.colors[this.barColor], this.colors[this.railColor]]
		for ( let x = 0; x < percentage; x++ ) bar += ' '
		for ( let x = 0; x < (100 - percentage); x++ ) rail += ' '

		process.stdout.clearLine()
		process.stdout.cursorTo(0)
		process.stdout.write('Processing : ' + this.data[index] + '\n' + bar + rail + '\x1b[0m ' + (this.percentage ? `[${this.colors[this.percentageColor]} ${percentage}% \x1b[0m]` : ''))
		if (index < this.data.length - 1) return this.run(index + 1)
		else process.stdout.write('\n\n')

		return { passed : this.passed, error : this.error }
	}

}

module.exports = Progress

// /* Queue functions */
// const f0 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
// const f1 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
// const f2 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
// const f3 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
// const f4 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
// const f5 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
// const f6 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
// const f7 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
// const f8 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
// const f9 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )

// const array    = [f0, f1, f2, f3, f4, f5, f6, f7, f8, f9]
// const progress = new Progress(array)

// progress.config({ /* config method */
// 	/*
// 	Colors label
// 	- black					- green					- blue					- cyan
// 	- red						- yello					- magenta				- white
// 	*/
// 	traceText      : true, 		/* shown or hidden */
// 	percentage     : true, 		/* shown or hidden */
// 	percentageColor: 'blue', 	/* percentage number background color */
// 	barColor       : 'white', /* bar color */
// 	railColor      : 'black' 	/* rail color */
// });

// ( async progress => console.log(await progress.run() /* run method */) )(progress /* passing the progress object */)
