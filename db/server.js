const express = require('express');
const app = express();
const fs = require('fs');
const cart = require('./cartRouter');

app.use(express.json());
app.use('/', express.static('public'));
app.use('api/cart', cart);

app.get('api/products', (req, res) => {
    fs.readFile('db/server')
})