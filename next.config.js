const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const dotenv = require('dotenv');

module.exports = withImages(withSass(withFonts()));
