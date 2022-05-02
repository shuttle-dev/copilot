const path = require('path');

const tsconfigPath = path.join(__dirname, 'tsconfig.json');

require('ts-node').register({
	project: tsconfigPath,
});

require('./gulp/gulpfile');
