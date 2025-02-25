
import fetch from 'node-fetch';
import { lenguajeGB } from '../lib/language.js'; // Adjust the import path as necessary

import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉𝘼 𝙋𝙀𝙏𝙄𝘾𝙄𝙊𝙉 𝙊 𝙐𝙉𝘼 𝙊𝙍𝘿𝙀𝙉 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙇𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝘼𝙍𝘿\n\n❏ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝘿𝙀 𝙋𝙀𝙏𝙄𝘾𝙄𝙊𝙉𝙀𝙎 𝙔 𝙊𝙍𝘿𝙀𝙉𝙀𝙎\n❏ ${usedPrefix + command} Recomienda un top 10 de películas de acción\n❏ ${usedPrefix + command} Codigo en JS para un juego de cartas`
try {
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.command = ['bard', 'gemini']
handler.help = ['bard', 'gemini']
handler.tags = ['herramientas']


var handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙎𝙀𝙍𝙄𝙎𝘾𝙄 𝙐𝙉𝘼 𝙍𝙄𝘾𝙃𝙄𝙀𝙎𝙏𝘼 𝙊 𝙐𝙉 𝙊𝙍𝘿𝙄𝙉𝙀 𝙋𝙀𝙍 𝙐𝙏𝙄𝙇𝙄𝙕𝙕𝘼𝙍𝙀 𝙇𝘼 𝙁𝙐𝙉𝙕𝙄𝙊𝙉𝙀 𝘿𝙄 𝘽𝘼𝙍𝘿\n\n❏ 𝙀𝙎𝙀𝙈𝙋𝙄𝙊 𝘿𝙄 𝙍𝙄𝘾𝙃𝙄𝙀𝙎𝙏𝙀 𝙀 𝙊𝙍𝘿𝙄𝙉𝙄\n❏ ${usedPrefix + command} Consiglia una top 10 di film d'azione\n❏ ${usedPrefix + command} Codice in JS per un gioco di carte`;
    try {
        conn.sendPresenceUpdate('composing', m.chat);
        var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`);
        var res = await apii.json();
        await m.reply(res.result);
    } catch (e) {
        await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m);
        console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`);
        console.log(e);
    }
};
handler.command = ['bard', 'gemini', 'chatgbt', "ai", "ia"];
handler.help = ['bard', 'gemini', 'ia'];
handler.tags = ['herramientas'];


handler.premium = false;

export default handler;


