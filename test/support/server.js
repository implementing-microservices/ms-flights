const server = require('nodebootstrap-server')
    , express = require('express')
    , healthcheck = require('maikai')
    , appConfig = require('../../appConfig');

exports.beforeEach = function(app, callback) {
  server.setupTest(app, function(app) {
    app.use(healthcheck().express());

    appConfig.setup(app, callback);
  });
};

exports.express = function() {
  return express();
};
