require('dotenv').config()

const Telegraf = require('telegraf')
const spotify = require('./usecases/spotify')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.start(context => {
  console.log('first_name:',context.from.first_name)
  context.reply(`Hola ${context.from.first_name}! 🎶\nPuedes buscar una canción con el comando\n/track nombreDeLaCanción`)
})

bot.command('track',(context)=>{
  // context.message.text
  const messageText = context.message.text.replace('/track', '').trim()
  context.reply(messageText)
})

bot.launch()
  .then(()=>{
    console.info('> BOT READY!')
  })
  .catch(error=>{
    console.error('ERROR:',error);
  })