const Arena = require('bull-arena');

let config;
try {
  config = require('./index.json');
} catch (err) {
  if (err.code !== 'MODULE_NOT_FOUND') {
    throw err;
  }
}

Arena(config);
