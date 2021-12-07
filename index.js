const Arena = require('bull-arena');

let config;
try {
  config = require('./index.json');
} catch (err) {
  if (err.code !== 'MODULE_NOT_FOUND') {
    throw err;
  }
}

let Bull, Bee, BullMQ;

Arena({
  ...config,
  get Bull() {
    return Bull || (Bull = require('bull'));
  },
  get Bee() {
    return Bee || (Bee = require('bee-queue'));
  },
  get BullMQ() {
    return BullMQ || (BullMQ = require('bullmq').Queue);
  },
});
