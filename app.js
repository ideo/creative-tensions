'use strict';

var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

const client = require('./contentfulClient');

var app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('./public'));

app.get('/content', function(req, res) {
    client.getEntries().then((entries) => {
        res.json({content: entries.items});
    });
});

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port ' + (process.env.PORT || 3000));
});

