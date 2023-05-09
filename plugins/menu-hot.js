const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
*ミ💖 𝙷𝙾𝙻𝙰 _${name}_ 💖彡*

${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`)}

*<ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠/>*

° ඬ⃟🔞 _${usedPrefix}pack_
° ඬ⃟🔞 _${usedPrefix}pack2_
° ඬ⃟🔞 _${usedPrefix}pack3_
° ඬ⃟🔞 _${usedPrefix}videoxxx_
° ඬ⃟🔞 _${usedPrefix}tiktokxxx_
° ඬ⃟🔞 _${usedPrefix}tetas_
° ඬ⃟🔞 _${usedPrefix}booty_
° ඬ⃟🔞 _${usedPrefix}ecchi_
° ඬ⃟🔞 _${usedPrefix}furro_
° ඬ⃟🔞 _${usedPrefix}imagenlesbians_
° ඬ⃟🔞 _${usedPrefix}panties_
° ඬ⃟🔞 _${usedPrefix}pene_
° ඬ⃟🔞 _${usedPrefix}porno_
° ඬ⃟🔞 _${usedPrefix}porno2_
° ඬ⃟🔞 _${usedPrefix}randomxxx_
° ඬ⃟🔞 _${usedPrefix}pechos_
° ඬ⃟🔞 _${usedPrefix}yaoi_
° ඬ⃟🔞 _${usedPrefix}yaoi2_
° ඬ⃟🔞 _${usedPrefix}yuri_
° ඬ⃟🔞 _${usedPrefix}yuri2_
° ඬ⃟🔞 _${usedPrefix}trapito_
° ඬ⃟🔞 _${usedPrefix}hentai_
° ඬ⃟🔞 _${usedPrefix}nsfwloli_
° ඬ⃟🔞 _${usedPrefix}nsfworgy_
° ඬ⃟🔞 _${usedPrefix}nsfwfoot_
° ඬ⃟🔞 _${usedPrefix}nsfwass_
° ඬ⃟🔞 _${usedPrefix}nsfwbdsm_
° ඬ⃟🔞 _${usedPrefix}nsfwcum_
° ඬ⃟🔞 _${usedPrefix}nsfwero_
° ඬ⃟🔞 _${usedPrefix}nsfwfemdom_
° ඬ⃟🔞 _${usedPrefix}nsfwglass_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/L2PCWj8QQQ6HPZvmR7izIT', 'GRUPO OFICIAL', null, null, [
['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']
], m)
}}
handler.help = ['hotmenu', 'help2', '?2', 'menuaudios']
handler.tags = ['hotmenu']
handler.command = /^(hotmenu|menuhot|menu+18)$/i
handler.fail = null
export default  handler
