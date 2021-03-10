'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.json('Welcome to the Classic Rock Review API').status(200);
});

module.exports = router;