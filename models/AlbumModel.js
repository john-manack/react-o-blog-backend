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
            SELECT album.id, album_name, band_name, slug, link, cover, stars, comment_message
            FROM album
            INNER JOIN comment
                ON album.id = comment.album_reference
            ORDER BY album.id ASC;
        `);
        return response;
    }

    static async getBySlug(slug) {
        try {
            const response = await db.one(`
            SELECT album.id, album_name, band_name, slug, link, cover, stars, comment_message
            FROM album
            INNER JOIN comment
                ON album.id = comment.album_reference 
            WHERE slug = '${slug}';
            `);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async getAlbumInfo(slug) {
        try {
            const response = await db.any(`
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

}

module.exports = AlbumModel;