const app = require('./server');
const supertest = require('supertest');

it('gets the timezones endpoint', (done) => {
  supertest(app)
    .get("/api/timezones")
    .expect(200)
    .then((response) => {
      expect(response.body.city).toBe("Tokyo")
      expect(response.body.timeZone).toBe("Japan")
      done();
    })
    .catch(err => done(err))
})
