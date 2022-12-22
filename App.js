const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Image procesing Api');
});

app.listen(3000, function() {
  console.log('Image processing API listening on port 3000!');
});

const sharp = require('sharp');

app.get('/resize', function(req, res) {
  // Read the image file and resize it to 400 X 300
  sharp('image.jpg')
    .resize(400, 300)
    .toBuffer()
    .then(data => {
      // Send the resized image back to the client
      res.send(data);
    })
    .catch(error => {
      // Send an error message back to the client if there was a problem
      res.send(error.message);
    });
});


const Jimp = require('jimp');

app.get('/resize', function(req, res) {
  // Read the image file and resize it to 200x200
  Jimp.read('image.jpg')
    .then(image => {
      image.resize(200, 200);
      return image.getBufferAsync(Jimp.MIME_JPEG);
    })
    .then(data => {
      // Send the resized image back to the client
      res.send(data);
    })
    .catch(error => {
      // Send an error message back to the client if there was a problem
      res.send(error.message);
    });
});


