'use strict';

const express = require('express'),
    router = express.Router(),
    albumModel = require('../models/AlbumModel'),
    slugify = require('slugify');

router.get('/', async (req, res) => {
    const albumData = await albumModel.getList();
    res.json(albumData).status(200);
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const album = await albumModel.getAlbumInfo(slug);
    res.json(album).status(200);
})

router.post('/', async (req, res) => {
    const { album_name, band_name, link, cover } = req.body;
    const slug = slugify(album_name, {
        replacement: '_',
        lower: true,
        strict: true
    });
    const response = await albumModel.addEntry(album_name, band_name, slug, link, cover);
    if (response.rowCount >= 1) {
        res.redirect('/ceos')
    } else {
        res.sendStatus(500);
    }
});

module.exports = router;