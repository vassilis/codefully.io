const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withImages(withSass(withFonts()));
