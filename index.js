const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5486720847:AAHSTdFgNhSu1eeJQ1CQeCwvvDGY6eSJh3M';
const translate = require('@vitalets/google-translate-api')
const bot = new TelegramBot(TOKEN, {polling:true})

let stateen_uz = 0,
    stateuz_en = 0,
    statenl_uz = 0,
    stateuz_nl = 0,
    stateru_uz = 0,
    stateuz_ru = 0


bot.setMyCommands([
    {command: '/start', description: "Boshlash"},
    {command: '/en_uz', description: "English to Uzbek"},
    {command: '/uz_en', description: "Uzbek to English"},
    {command: '/nl_uz', description: "Dutch to Uzbek"},
    {command: '/uz_nl', description: "Uzbek to Deutsch"},
    {command: '/ru_uz', description: "Russian to Uzbek"},
    {command: '/uz_ru', description: "Uzbek to Russian"}
])

bot.on('message', (message)=> {
    const chatId= message.chat.id
    
    if(message.text == '/start') {
        console.log(message);
        const user = message.from.first_name
        bot.sendMessage(chatId, `Assalomu alaykum ${user} botga xush kelibsiz \nTilni tanlang \n👇`)
    }
})

//English to Uzbek
bot.on('message', (message)=> {
    const chatId= message.chat.id
    
    if(message.text == '/en_uz') {
        bot.sendMessage(chatId, `Siz English to Uzbek amaliyotini tanladingiz \nMatn kiriting`)
        stateen_uz = 1
    } else if(stateen_uz==1) {
        let text = message.text
        async function main() {
            let response = await translate(text, {from:'en', to:'uz'})
            
            await bot.sendMessage(chatId, response.text)
        }
        main()
    }
})

//Uzbek to English
bot.on('message', (message)=> {
    const chatId= message.chat.id
    
    if(message.text == '/uz_en') {
        bot.sendMessage(chatId, `Siz Uzbek to English amaliyotini tanladingiz \nMatn kiriting`)
        stateuz_en = 1
    } else if(stateuz_en == 1) {
        let text = message.text
        async function main() {
            let response = await translate(text, {from:'en', to:'uz'})
            
            await bot.sendMessage(chatId, response.text)
        }
        main()
    }
})

//Dutch to Uzbek
bot.on('message', (message)=> {
    const chatId= message.chat.id
    
    if(message.text == '/nl_uz') {
        bot.sendMessage(chatId, `Siz Dutch to Uzbek amaliyotini tanladingiz \nMatn kiriting`)
        statenl_uz = 1
    } else if(statenl_uz == 1) {
        let text = message.text
        async function main() {
            let response = await translate(text, {from:'nl', to:'uz'})
            
            await bot.sendMessage(chatId, response.text)
        }
        main()
    }
})

//Uzbek to Dutch
bot.on('message', (message)=> {
    const chatId= message.chat.id
    
    if(message.text == '/nl_uz') {
        bot.sendMessage(chatId, `Siz Uzbek to Dutch amaliyotini tanladingiz \nMatn kiriting`)
        stateuz_nl = 1
    } else if(stateuz_nl == 1) {
        let text = message.text
        async function main() {
            let response = await translate(text, {from:'nl', to:'uz'})
            
            await bot.sendMessage(chatId, response.text)
        }
        main()
    }
})

//Russian to Uzbek
bot.on('message', (message)=> {
    const chatId= message.chat.id
    
    if(message.text == '/ru_uz') {
        bot.sendMessage(chatId, `Siz Russian to Uzbek amaliyotini tanladingiz \nMatn kiriting`)
        stateru_uz = 1
    } else if(stateru_uz == 1) {
        let text = message.text
        async function main() {
            let response = await translate(text, {from:'ru', to:'uz'})
            
            await bot.sendMessage(chatId, response.text)
        }
        main()
    }
})

//Uzbek to Russian
bot.on('message', (message)=> {
    const chatId= message.chat.id
    
    if(message.text == '/uz_ru') {
        bot.sendMessage(chatId, `Siz Uzbek to Russian amaliyotini tanladingiz \nMatn kiriting`)
        stateuz_ru = 1
    } else if(stateuz_ru == 1) {
        let text = message.text
        async function main() {
            let response = await translate(text, {from:'uz', to:'ru'})
            
            await bot.sendMessage(chatId, response.text)
        }
        main()
    }
})