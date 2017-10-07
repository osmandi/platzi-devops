const request = require('supertest'); // Librería

const app = require('../app'); // Carpeta con el código

describe('app', function(){
  it('should serve html on index', (done) => {
    request(app).get('/').expect('Content-Type', /html/).expect(200,done)
  });
});
