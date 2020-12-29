const router = require('express').Router();
const fs = require('fs');

const inventoryFile = './data/inventory.json';

router.route('/')
  .get((req, res) => {
    fs.promises.readFile(inventoryFile, { encoding: 'utf-8' })
      .then((data) => {
        res.json(JSON.parse(data));
      })
      .catch(() => {
        res.status(400).send('There has been an error with your request');
      })
  });

  module.exports = router;