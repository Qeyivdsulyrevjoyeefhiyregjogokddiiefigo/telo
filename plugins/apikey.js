let handler = async m => m.reply(`
┏━━°❀❬ *APIKEY FREE* ❭❀°━━┓
┣➥ *Bany :* adadeh
┣➥ *shizukaapi* = itsmeiky633
┣➥ *apivhtear* = 1BlnApiIkyPake
┃ 「 *Pesan Dari My Owner* 」
┃ > *Trimakasih Telah Membantu*
┃ *Jalanya Bot Ini :)*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['.apikey']
handler.tags = ['info']
handler.command = ['.apikey']
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
