const base = require('./webpack.config.js');

let config = Object.assign({}, base, {});

delete config.entry

module.exports = config