require('dotenv').config()

const spotify = require('./usecases/spotify')

spotify.findTracks('sabor a mi')
.then(response => {
    console.log('response:',response)
  })
  .catch(error => {
    console.error('ERROR:', error);
  })