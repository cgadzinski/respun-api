'use strict';

// eslint-disable-next-line import/no-unresolved
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const inventory = require('./routes/inventory');
const index = require('./routes/index');

app.use(cors());
app.use(express.json());

app.use('/', index);
app.use('/inventory', inventory);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})

module.exports = app;