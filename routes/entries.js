'use strict';

const express = require('express'),
    router = express.Router(),
    albumModel = require('../models/AlbumModel');

router.get('/', async (req, res) => {
    const albumData = await albumModel.getList();
    res.json(albumData).status(200);
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const album = await albumModel.getAlbumInfo(slug);
    res.json(album).status(200);
})

module.exports = router;