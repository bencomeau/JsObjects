/**
 * Created by charlie on 11/9/15.
 */

describe('File Suite', function() {
    'use strict';

    it('expects elfBitly to be defined', function() {
        var isDefined = typeof elfBitly !== 'undefined';
        expect(isDefined).toBe(true);
    });

    it('expects elfDownloads to be defined', function() {
        var isDefined = typeof elfDownloads !== 'undefined';
        expect(isDefined).toBe(true);
    });

    it('expects elfMovement to be defined', function() {
        var isDefined = typeof elfMovement !== 'undefined';
        expect(isDefined).toBe(true);
    });

    it('expects elfDisplay to be defined', function() {
        var isDefined = typeof elfDisplay !== 'undefined';
        expect(isDefined).toBe(true);
    });
});
