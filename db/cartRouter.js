const express = require('express');
const fs = require('fs');
const router = express.Router();
const handler = require('./handler');

router.get('/', (req, res) => {
    fs.readFile('db/catalogData.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    })
});

router.post('/', (req, res) => {
    handler(req, res, 'add', 'db/catalogData.json');
});

router.put('/:id', (req, res) => {
    handler(req, res, 'change', 'db/catalogData.json');
});

router.delete('/:id', (req, res) => {
    handler(req, res, 'remove', 'db/catalogData.json');
});

module.exports = router;