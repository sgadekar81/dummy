const express = require('express');
var bodyParser = require('body-parser');
let db = require('./database');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


app.post('/createList', (req, res) => {
    let insertRes = db.insert('lists', req.body)
    res.json(insertRes);
})

app.get('/getLayout/:id', (req, res) => {
    let getRes = db.get('layouts', req.params.id)
    res.json(getRes)
})

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});