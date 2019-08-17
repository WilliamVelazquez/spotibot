const spotify = require('../lib/spotify')

async function findTracks(query = '', limit = 2){
  const response = await spotify.search({ type: 'track', query, limit })
  const items = response.tracks.items
  const cleanItems = items.map(item=>{
    return {
      name: item.name,
      artists: item.artists.map(artist=>artist.name).join(', '),
      url: item.external_urls.spotify
    }
  })
  const trackText = cleanItems.map(item=>{
    let text = `Title: ${item.name}.\n`
    text += `Artists: ${item.artists}\n`
    text += item.url
    return text
  })
  return trackText
}

module.exports = {
  findTracks
}