let handler = async(m, { conn, text, participants }) => {
  let teks = `โโโชใ *๐ฅ Mention All* ใโชโโ\n\nโฒ *Message : ${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += `เฟโก๏ธ @${mem.id.split('@')[0]}\n`
				}
                teks += `\nโ *${wm}* โ`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
