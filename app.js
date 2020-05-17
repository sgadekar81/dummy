const express = require('express');
var bodyParser = require('body-parser');
let db = require('./database');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.get('/api/ad/:id', (req, res) => {
    let getRes = db.get('ads', req.params.id)
    if (getRes.length) {
        res.json(getRes[0])
    } else {
        res.json({})
    }

})





app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});


