# cli-progress-bar
if you have several functions that you want to execute sequentially with colored progress percentages. just clone this code :)

## Usage

```Javascript
const Progress = require('cli-progress-bar')

/* Queue functions */
const f0 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
const f1 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
const f2 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
const f3 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
const f4 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
const f5 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
const f6 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
const f7 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
const f8 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )
const f9 = _ => new Promise( resolve => setTimeout(resolve, 10, true) )

const array    = [f0, f1, f2, f3, f4, f5, f6, f7, f8, f9]
const progress = new Progress(array)

progress.config({ /* config method */
	/*
	Colors label
	- black					- green					- blue					- cyan
	- red						- yello					- magenta				- white
	*/
	traceText			 : true, 		/* shown or hidden */
	percentage     : true, 		/* shown or hidden */
	percentageColor: 'blue', 	/* percentage number background color */
	barColor       : 'white', /* bar color */
	railColor      : 'black' 	/* rail color */
});

( async progress => console.log(await progress.run() /* run method */) )(progress /* passing the progress object */)
```

## Output

![alt text](https://github.com/kintaroazurachaniago/cli-progress-bar-image/blob/main/cli-progress-bar-image.png)
