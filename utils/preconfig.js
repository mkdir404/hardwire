#!/usr/bin/env node

'use strict';

/* add script (boilerplate creator) to package.json  */

var fs = require('fs');

if (fs.existsSync( '../../package.json')) {
	fs.readFile( '../../package.json', function (err, data) {
		if (err) { throw err;}

		var pkg = JSON.parse( data );
		pkg.scripts = pkg.scripts || {};
		pkg.scripts['hw-boilerplate'] = 'node ./node_modules/hardwire/utils/boilerplate.js';
		pkg.scripts['hw-initdb'] = 'node ./node_modules/hardwire/utils/initdb.js';
		pkg.scripts.start = 'node ./app.js';

		fs.writeFile( '../../package.json', JSON.stringify( pkg ), function (err) {
			if (err) {throw err;}
		});
	});
}
