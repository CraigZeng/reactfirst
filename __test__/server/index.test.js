import request from 'supertest';
import app from '../../server/index';

describe('test url /', () => {
  let agent;

  before(() => {
    agent = app.listen();
  });

  it('should return 200', (done) => {
    request(agent)
      .get('/')
      .expect(200)
      .end(done);
  });

  it('should return body with react renderred', (done) => {
    request(agent)
      .get('/')
      .expect(200)
      .expect(/data-reactroot/g)
      .end(done);
  });
});
