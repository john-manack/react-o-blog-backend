'use strict';
const HTTP = require('http');

const HOSTNAME = '12.0.0.1',
    PORT = 3000;

const cors = require('cors');

const express = require('express'),
    app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
})

const rootController = require('./routes/index');
const entriesController = require('./routes/entries')

app.use('/', rootController);
app.use('/entries/', rootController);