const request = require('supertest');
const assert  = require('chai').assert;
const sinon   = require('sinon');
const server  = require('../support/server');
const fh      = require("../support/fixture-helper.js");
const log     = require('metalogger')();

describe('health endpoint', () => {
  let app;

  beforeEach((done) => {
    app = server.express();
    server.beforeEach(app, function() {
      done();
    });
  });

  it('GET /health returns proper data', (done) =>  {
    request(app)
      .get('/health')
      .expect('Content-Type', /application\/health\+json.*/)
      .expect(200)
      .expect(function(response) {
        const payload = response.body;
        assert.equal(payload.status, 'pass');
      })
      .end(done);
  });

});
