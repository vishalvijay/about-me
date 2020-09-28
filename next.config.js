/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
/* eslint-enable @typescript-eslint/no-var-requires */

const plugins = [optimizedImages];

module.exports = withPlugins(plugins);
