let fs = require('fs')

global.owner = ['6281929280669','6281929280669'] // Put your number here
global.mods = ['6281228402912'] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  dapu: 'https://api.dapuhy.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  melcanz: 'httpa://melcanz.com',
  lol: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'FuzBot1',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.dapuhy.xyz': '4oYjiJ6vJr'
}

// Sticker WM
global.stiker_wait = 'Stiker sedang dibuat'
global.packname = ``
global.author = '🌹 PanZZ-MD 🌹'
global.email = 'ozan6825@hotmail'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '© ZaBot-MD'
global.media = 'https://telegra.ph/file/5d45a3d1e12726d98c5e4.jpg'

global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
global.troli = {
        "key": {
            "remoteJid": "12036302272124355@g.us",
            "participant": "0@s.whatsapp.net"
        },
        "message": {
            "productMessage": {
                "product": {
                    "productImage": {
                        "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEBAAMBAQAAAAAAAAAAAAAAAQIEBgUDAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAOeF0KRSwIAKGx8lwbMNebPxMAjPCr0N57M6fX8nXPZ8PEkABUqgIAIAAAAB/8QAIRAAAgIDAAICAwAAAAAAAAAAAQIAAwQREhATIUBBQlH/2gAIAQEAAT8A+4ASQBGxL0XpkIE4YKCQdGHFvVOyh1Fxb3TpayRExL7BtazHRkYqw0fKAlgBMlHOPXULQR+0troOMKg69JGsT1aLLz65su1L1XBa1HyImQPfk8vpeY7FmJJ2fIJE6b+mVgM2mbUNCfi+WLwdB9wEiH7v/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAgEBPwBP/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAwEBPwBP/9k=",
                    },

                    "title": wm,
                    "currencyCode": "ILS",
                    "priceAmount1000": " ",
                },
                "businessOwnerJid": "15869999956@s.whatsapp.net"
            }
        }
    }

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
