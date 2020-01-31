const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const makeCrud = require('express-json-file-crud').makeCrud;

app.use(function(req, res, next) {
    console.log(req.url);
    var match = /\/said\/\d+/.exec(req.url);
    console.log(JSON.stringify(match))
	if (match) {
		req.url = `/index.html`;
	}
	next();
});

app.use(express.static('public')); //Serve public files

function addEndpoint(name) {
	const folder = path.join(process.cwd(), name);

	if (!fs.existsSync(folder)) {
		console.log(`Creating folder "${folder}"`);
		fs.mkdirSync(folder);
	}

	const crud = makeCrud(name, folder);
	app.use(`/${name}`, crud);

	console.log(`Added CRUD-endpoint "${name}"`);
}

addEndpoint('storage');

var port = process.env.PORT || 3000;
console.log(`Starting server on port ${port}...`);
app.listen(port, (err) => {
	if (err) console.error(err);
	else console.log('Server running.');
});
