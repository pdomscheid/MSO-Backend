const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const makeCrud = require('express-json-file-crud').makeCrud;

function addEndpoint(name) {
    const folder = path.join(process.cwd(), name);

    if (!fs.existsSync(folder)) {
        console.log(`Creating folder "${folder}"`)
        fs.mkdirSync(folder);
    }

    const crud = makeCrud(name, folder);
    app.use(`/${name}`, crud);

    console.log(`Added CRUD-endpoint "${name}"`)
}

addEndpoint("storage");

app.listen(3000, (err)=>{
    if (err) console.error(err);
    else console.log("Server running.");
});