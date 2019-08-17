const spotify = require('../lib/spotify')

function findTrack(query = '', limit = 2){
  return spotify.search({
    type: 'track',
    query,
    limit
  })
}

module.exports = {
  findTrack
}