const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BOYXA-XD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lSVEhDY29OWEJsQmpGVnd0QnZCeWlsNlJ0RENZOXNXbUgyYTM4dmprbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU052a0FUSkZlTG9KMkpRekcxWGJZaUtkR1VYRUFIbmNOSjBXVXpoNndWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPT0Zydm12VXovdVJsMnpRdUdOREFVQ3BHTjMyZDlkTFhPemk0c001dkVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUOW80N2lla3BvelZYaC90YVpMQmFGRU0vSHEwSU5vUnQvbFBhTnNVQWdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlNWWdzbFBqMUVoQWJEY21qcjN3dDZTZ0FxQzdBS2ZSMkZsdG56RVhvVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFUN05wWEY5UXZhdkdOSG96d2RXWkp2V3k2OEdVYmJZRXZVc0RxV2NxWEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9MNEZydWtYL0czbG1pWWwzNEJxWk1ETytVbTh6d0djSWI0QXdWK2FYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVdHRUdiWW1vWkQ2Y3Jqb255WFEycUYzSW5IQ3hnVmd6R2M1R3I1Q25UWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxZZGtVMjA2UG1rLzRWSjFRZ3BXRFdwVEJVMXJzNTVUWkVUMURoRzFNWm9LK29zNkxmMzFxZGhOcTYwMVRYV2NGeDEzcGdHaE1nNHl0K3dIWHo2NURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6IlFjdVl5ZnpTTlA0YlBNY3l0djZHU1RxOE5YOENZeFNRaDF0WVdJMU5jZFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijk3SFhDTjcyIiwibWUiOnsiaWQiOiIyNjM3Mzg0MDMyMDU6NzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSm9zaHVhbWFtYm8xIiwibGlkIjoiMTg5NjQ0OTAxNzYxMTg0OjczQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFg3NlJvUW03Q0p4Z1lZRENBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZVZNQnQ1YytmQVRwVkowYXhHcmZmejV2Nm45NmxpMERQMHpndjlUdlB6WT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiakNYWjNvblY5ak1temhFMGpvQUloN2J5N0J3QzVsWVZ6VmM2WVp1ZDFKSFpQUjJxRzhUOWREMVE4bDlpRk9SRmNCaHViNEU3eGdIN2prMWlGZ1U1QlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjVQUURRbGdqMVNjZTZkU0s5dXNvN1hqMFQvc0JpdUFyTFg5ZGZDQzhXWklSNytRdjZCNG9GQ1dOY2dUNzNTQnlCS1NBM0FlcnpUVkFpeTZjOVJOL0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzM4NDAzMjA1OjczQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhsVEFiZVhQbndFNlZTZEdzUnEzMzgrYitwL2VwWXRBejlNNEwvVTd6ODIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzU2NzAwNywibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNiZCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝘽𝙊𝙔𝙓𝘼-𝙓𝘿 ♥️💠*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/dtqvMVZ1/Boyxaxdwagrp.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "F1-BOYXA-XD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "-BOYXA-XD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263716985350",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*BOYXA-XD-F Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙᴏʏxᴀ-xᴅ ᴏғғɪᴄɪᴀʟ ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/q7sRgTNH/midkingowner.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴜʙsᴄʀɪʙᴇ ᴛᴏ ᴊᴏsʜᴜᴀᴍᴀᴍʙᴏ1 ᴏɴ ʏᴏᴜᴛᴜʙᴇ ᴀᴛ https://youtube.com/@joshuamambo1 💠",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263716985350",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
