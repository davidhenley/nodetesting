const request = require('supertest');
const expect = require('expect');

const { app } = require('./server');

describe('Server', () => {
  it('should return hello world', (done) => {
    request(app).get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          error: 'Page not found.'
        });
      })
      .end(done);
  });

  it('should contain a specific user', (done) => {
    request(app).get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({ name: 'David Henley', age: 32 });
      })
      .end(done);
  });
});
