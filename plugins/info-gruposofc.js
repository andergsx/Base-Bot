let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*HOLA TE INVITO A UNIRTE AL GRUPO SUPORT DE TOXI-BOT Y FORMAR PARTE DE LA COMUNIDAD*

*➤ 𝙶𝚛𝚞𝚙𝚘 𝚘𝚏𝚒𝚌𝚒𝚊𝚕 𝚍𝚎𝚕 𝙱𝚘𝚝:*
*1.-https://chat.whatsapp.com/L2PCWj8QQQ6HPZvmR7izIT* 
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
