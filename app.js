const express = require('express');
var bodyParser = require('body-parser');
let db = require('./database')
const app = express()
const port = 8884;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))


app.post('/createList', (req, res) => {
    let insertRes = db.insert('lists', req.body)
    res.json(insertRes);
})

app.get('/getLayout/:id', (req, res) => {
    let getRes = db.get('layouts', req.params.id)
    res.json(getRes)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))