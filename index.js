const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5486720847:AAHSTdFgNhSu1eeJQ1CQeCwvvDGY6eSJh3M';
const translate = require('@vitalets/google-translate-api')
const bot = new TelegramBot(TOKEN, {polling:true})

let state = 0

bot.setMyCommands([
    {command: '/start', description: "Boshlash"}
])

bot.on('message', (message)=> {
    const chatId= message.chat.id
    
    if(message.text == '/start') {
        console.log(message);
        const user = message.from.first_name
        bot.sendMessage(chatId, `Salom ${user} botga xush kelibsiz \nHello Welcome to bot \nO'zbekcha so'z yozing`)
        state= 1
    } else if(state==1) {
        let text = message.text
        async function main() {
            let response = await translate(text, {from:'uz', to:'en'})
            
            await bot.sendMessage(chatId, response.text)
        }
        main()
    }
})
