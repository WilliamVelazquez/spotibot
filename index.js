require('dotenv').config()

const Telegraf = require('telegraf')
const spotify = require('./usecases/spotify')

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.start(context => {
  console.log('context',context)
  context.reply('Hola 😊!')
})

bot.launch()
  .then(()=>{
    console.info('> BOT READY!')
  })
  .catch(error=>{
    console.error('ERROR:',error);
  })