'use strict';

const db = require('./conn');

class AlbumModel {
    constructor(album_name, band_name, slug) {
        this.album_name = album_name;
        this.band_name = band_name;
        this.slug = slug;
    }
    
    static async getList() {
        const response = await db.any(`
            SELECT * FROM album;
        `);
        return response;
    }

    static async getBySlug(slug) {
        try {
            const response = await db.one(`
                SELECT * FROM album WHERE slug = '${slug}';
            `);
            console.log('response is', response);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async getAlbumInfo(slug) {
        try {
            const response = await db.one(`
                SELECT *
                FROM album
                INNER JOIN comment
                    ON album.id = comment.album_reference
                WHERE slug = '${slug}';
            `);
            return response;
        } catch (error) {
            console.error("ERROR :", error);
            return error;
        }
    }

    static async addEntry(album_name, band_name, slug, link, cover) {
        const response = await db.result(`INSERT INTO album (album_name, band_name, slug, link, cover) VALUES ($1, $2, $3)`, [album_name, band_name, slug, link, cover]);
        return response;
    }

}

module.exports = AlbumModel;