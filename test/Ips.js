const request = require('request');

describe('Image Processing API', function() {
  it('should return "Image Processing Api" when the root path is accessed', function(done) {
    request.get('http://localhost:3000/', function(error, response, body) {
      expect(body).toBe('Image Processing Api');
      done();
    });
  });
});
