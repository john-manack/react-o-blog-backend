'use strict';

const express = require('express'),
    router = express.Router(),
    albumModel = require('../models/AlbumModel');

router.get('/', async (req, res) => {

    res.json('Welcome to the Classic Rock Album API').status(200);
});

module.exports = router;