require('dotenv').config()

const spotify = require('./usecases/spotify')

spotify.findTrack('november')
.then(response => {
    console.log('response:',response)
  })
  .catch(error => {
    console.error('ERROR:', error);
  })