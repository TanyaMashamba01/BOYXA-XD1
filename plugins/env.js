const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const path = require('path');
const axios = require('axios');
const fs = require('fs');

cmd({
    pattern: "env",
    desc: "menu the bot",
    category: "menu3",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `╭━━━〔 *${config.BOT_NAME} Main Menu* 〕━━━╮
┃ ✨ *𝕆𝕨𝕟𝕖𝕣:* ${config.OWNER_NAME}
┃ ⚙️ *𝕄𝕠𝕕𝕖:* ${config.MODE}
┃ 📡 *ℙ𝕝𝕒𝕥𝕗𝕠𝕣𝕞:* Heroku
┃ 🧠 *𝕋𝕪𝕡𝕖:* NodeJs (Multi Device)
┃ ⌨️ *ℙ𝕣𝕖𝕗𝕚𝕩:* ${config.PREFIX}
┃ 🧾 *𝕍𝕖𝕣𝕤𝕚𝕠𝕟:* 3.0.0 Beta
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━〔 *𝕄𝕖𝕟𝕦* 〕━━┈⊷
‎┃◈╭─────────────·๏
‎┃◈┃• *admin-events*
‎┃◈┃• *welcome*
‎┃◈┃• *setprefix*
‎┃◈┃• *mode*
‎┃◈┃• *auto_typing*
‎┃◈┃• *always_online*
‎┃◈┃• *auto_reacording*
‎┃◈┃• *status_view* 
‎┃◈┃• *status_react*
‎┃◈┃• *read_message*
‎┃◈┃• *auto_sticker*
‎┃◈┃• *anti_bad*
‎┃◈┃• *auto_reply*
‎┃◈┃• *auto_voice*
‎┃◈┃• *custom_reacts*
‎┃◈┃• *auto_react*
‎┃◈┃• *anti_link* 
‎┃◈┃• *status_reply*
‎┃◈└───────────┈⊷
‎╰──────────────┈⊷
> ${config.DESCRIPTION}
`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363347365643318@newsletter',
                        newsletterName: '𝓑𝓸𝔂𝓴𝓪-𝓧𝓭',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send local audio from assets/menu.m4a

const audioPath = path.join(__dirname, 'https://files.catbox.moe/tmibg1.mp3');
await conn.sendMessage(from, {
    audio: fs.readFileSync(audioPath),
    mimetype: 'audio/mp4',
    ptt: true,
}, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});
