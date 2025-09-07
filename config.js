const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUdVRGQ5RlUvTFRMcFJJYjVROGVuVnJ3Mi9EenNydDhyblZRRFBNK1ZWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFozaVlEVytQRUQvZzZoZzFpcWpkMWo0V1hWVGZodnFBVmtUSzRYRTlUcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJR2t5TmlaZklhUExwQmZaYnllQzN0anlBZ0pYSzdjUXAxYnBMKzJOM1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsVS9RQWdVSVlBRUhEa0NoSFZqMnFxTGJFd2hmc21KUzI3ZGtjUnZicVVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVEbDhydGVtUmRQdGlQSmRhMnBjTWNoZkRPdG1kMFEwanRZeTlPMDhQSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNYOG1nZG1RZDc1UndWQlFqSjlKam16Ly9EZWtVUXNqSjhmSGpXVHNraDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01BdWJ5Vmk0RXVSejhjS1Z4c3o4QmowWkpaWmVZcnU3aCs3MGRjME1GOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2VoL0l3bi9zRUEraWo4R3ErN2JicDJuSE5zamlCdExtci9XYXRvRElGQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9WYUhIQUJhbWMvdVRERTkwa09GMWlNM01teWgyMkN6dXY0WWZXSk9QOTcwM3hhQVBiQ2thVXNLQWFXUFN2UVIrQnF3dVZqV2JBYzY5am0yN3NRZWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJ4b1czU2Y3VHVmSFBOVTd4Z08rQ3RGK0tNZTQxSVdTU3VTOFZZbHU2YnlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKWkdYQkxENSIsIm1lIjp7ImlkIjoiOTIzNDM1NjEzNzA0OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGlsbCIsImxpZCI6IjEyOTAyNjg1NzkwMjg0OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJT3E3WnNGRUtDbDY4VUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhaEdlLy9LQTJQWlRJalZ1VzVmdUdTYUNHcm8xQWtNZjhxaWUzSStYWVZrPSIsImFjY291bnRTaWduYXR1cmUiOiJoVGtpYVBHa0QwdXV6QmpHeUFHZ3dEaVhBUDVtRHdaUTZra3k4LzFVV0hsUDdxQ01heW1HVW5qTkpFdFI2NERqRi9vZUViQXliTmpzVWZjM01qcHBBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS0hOdGpzcnd4RXdWaFNxY1BQZCt3NldpMjh2emYwemsrcDJzS2kzckNDbVBCeVQwa3FwWTgxb1drV3orcTN5YlUzMVc1bEQrdzN5N0ltUmw4TS9vaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MzU2MTM3MDQ6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXb1Judi95Z05qMlV5STFibHVYN2hrbWdocTZOUUpESC9Lb250eVBsMkZaIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTcwNzQwODQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS3NlIn0=",
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
