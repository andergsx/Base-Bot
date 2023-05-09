let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*Mensaje:* ${pesan}`
let teks = `*⺀Tageando Grupo⺀*\n\n❏ ${oi}\n\n❏ *Tags:*\n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
teks += `*└* Andxxx - Bot\n\n*════ ∘◦❁◦∘ ════*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
