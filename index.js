require('dotenv').config()

const Telegraf = require('telegraf')
const spotify = require('./usecases/spotify')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.start(context => {
  // console.log('first_name:',context.from.first_name)
  context.reply(`Hola ${context.from.first_name}! 🎶\nPuedes buscar una canción con el comando\n/track nombreDeLaCanción`)
})

bot.command('track', async (context)=>{
  const query = context.message.text.replace('/track', '').trim()
  const tracks = await spotify.findTracks(query)
  // const tracksAsText = tracks.join(' - ')
  const replyPromises = tracks.map(track=>{context.reply(track)})
  const replies = await Promise.all(replyPromises)
})

bot.launch()
  .then(()=>{
    console.info('> BOT READY!')
  })
  .catch(error=>{
    console.error('ERROR:',error);
  })