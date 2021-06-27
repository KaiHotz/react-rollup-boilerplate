// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer({ cascade: false, flexbox: 'no-2009' })],
};
