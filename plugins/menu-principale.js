import { performance } from 'perf_hooks';

const handler = async (message, { conn, usedPrefix }) => {
    const userCount = Object.keys(global.db.data.users).length;
    const botName = global.db.data.nomedelbot || 'ChatUnity';

    const menuText = generateMenuText(usedPrefix, botName, userCount);
    
    const profilePictureUrl = await fetchProfilePictureUrl(conn, message.sender);

    const messageOptions = {
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363348388824958@newsletter',
                serverMessageId: '',
                newsletterName: `${botName}`
            },
            externalAdReply: {
                title: 'Menu Principale',
                body: 'Versione: 1.0',
                mediaType: 1,
                renderLargerThumbnail: false,
                previewType: 'thumbnail',
                thumbnail: await fetchThumbnail(profilePictureUrl),
                
            }
        }
    };

    await conn.sendMessage(message.chat, { text: menuText, ...messageOptions }, { quoted: message });
};

async function fetchProfilePictureUrl(conn, sender) {
    try {
        return await conn.profilePictureUrl(sender);
    } catch (error) {
        return 'default-profile-picture-url'; // Fallback URL in case of error
    }
}

async function fetchThumbnail(url) {
    try {
        const response = await fetch(url);
        const buffer = await response.buffer();
        return buffer;
    } catch (error) {
        return 'default-thumbnail'; // Fallback thumbnail in case of error
    }
}

handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandi)$/i;

export default handler;

function generateMenuText(prefix, botName, userCount) {
    return `
    『💬』 ══ •⊰✰⊱• ══ 『💬』
          𝐔𝐬𝐚 𝐁𝐮𝐝𝐢𝐧𝐨-𝐁𝐨𝐭
        
⚙  ${prefix}𝐅𝐮𝐧𝐳𝐢𝐨𝐧𝐢
📥  ${prefix}𝐈𝐧𝐬𝐭𝐚𝐥𝐥𝐚
👑  ${prefix}𝐩𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨
🛡  ${prefix}𝐀𝐝𝐦𝐢𝐧
👥  ${prefix}𝐆𝐫𝐮𝐩𝐩𝐨
📜  ${prefix}𝐒𝐜𝐫𝐢𝐩𝐭
🔈  ${prefix}𝐀𝐮𝐝𝐢𝐨
🤖  ${prefix}𝐢𝐚

    『💬』 ══ •⊰✰⊱• ══ 『💬』

𝐔𝐭𝐞𝐧𝐭𝐢: ${userCount}
𝐀𝐮𝐭𝐨𝐫𝐞: 𝐁𝐮𝐝𝐢𝐧𝐨
𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐞: 1.0
𝐃𝐚𝐭𝐚: ${new Date().toLocaleDateString()}

    『💬』 ══ •⊰✰⊱• ══ 『💬』
    `;
}
