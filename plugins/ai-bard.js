import fetch from 'node-fetch';
import { lenguajeGB } from '../lib/language.js'; // Adjust the import path as necessary

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