const readline = require('readline');

(async () => {
	const rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
  	const num = parseInt(line);
		console.log(num.toString(2));
		rl.close();
	}
	
	process.exit();
})();
