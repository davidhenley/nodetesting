const request = require('supertest');
const { app } = require('./server');

describe('Server', () => {
  it('should return hello world', (done) => {
    request(app).get('/')
      .expect('Hello world!')
      .end(done);
  });
});
