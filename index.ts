import express = require('express');
let app = express();

// POST support
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

app.use(bodyParser.urlencoded({
    "extended": true
}));

app.get('/', function(request, response) {
    response.send('Hello from ExpressJS with Typescript!!!');
});

app.get('/api/sayhello/:name', function(req, res) {
    let name = req.params.name;

    if (!isNaN(name) || name === undefined) {
        res.status(400)
            .send('Name in string is required');
    } else {
        res.json({
            "message": name
        });
    }
});

app.get('/api/sayhello2/', function(req, res) {
    let name = req.query.name;

    if (!isNaN(name) || name === undefined) {
        res.status(400)
            .send('Name in string is required');
    } else {
        res.json({
            "message": name
        });
    }
});

app.post('/api/posthello/', upload.array(), (req, res) => {
    let name = req.body.name;

    if (!isNaN(name) || name === undefined) {
        res.status(400)
            .send('Name in string is required');
    } else {
        console.log('Hello!!! ' + name);
    }

    res.send('POST received and processed. TQ');
});

app.listen(3000);
