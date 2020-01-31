const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const makeCrud = require('express-json-file-crud').makeCrud;

const subpages = [ /\/said\/\d+/, /\/medInfos\/\d+/, /\/privateInfos\/\d+/, /\/persoenlicheInfos\/\d+/ ];

app.use(function(req, res, next) {
	console.log(req.url);
	var isMatch = subpages.filter((r) => r.exec(req.url) !== null).length > 0;
	console.log(isMatch);
	if (isMatch) {
		req.url = `/index.html`;
	}
	next();
});

app.use(express.static('public')); //Serve public files

function addEndpoint(name, defaultFile) {
	const folder = path.join(process.cwd(), name);

	if (!fs.existsSync(folder)) {
		console.log(`Creating folder "${folder}"`);
		fs.mkdirSync(folder);
	}

	const fileName = path.join(folder, `${name}.json`);
	if (!fs.existsSync(fileName)) {
		if (fs.existsSync(defaultFile)) {
			console.log(`Copying JSON for ${name}; default data available!`);
			fs.copyFileSync(defaultFile, fileName);
		} else {
			console.log(`Missing JSON for ${name}; no default data available!`);
		}
	}

	const crud = makeCrud(name, folder);
	app.use(`/${name}`, crud);

	console.log(`Added CRUD-endpoint "${name}"`);
}

addEndpoint('storage', 'STORAGE_DEFAULT.json');

var port = process.env.PORT || 3000;
console.log(`Starting server on port ${port}...`);
app.listen(port, (err) => {
	if (err) console.error(err);
	else console.log('Server running.');
});
