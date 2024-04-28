const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' }) 


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/IBRAHIM-MD/tree/main";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JE3gJsV15ly9ViU6lgw0GD";
global.website=process.env.GURL || "https://www.youtube.com/@ibrahimmdgpt" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1a2a52f57c555a9ff7290.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254795297855 ";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/1a2a52f57c555a9ff7290.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "25471077266,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254710772666,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://ibrahim-tech-1-4a7321f212d3.herokuapp.com/";

module.exports = {

  menu: process.env.MENU || "A17_MD", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©ⁱᵇʳᵃʰⁱᵐ ᵗᵉᶜʰ💥90✴" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CHADWICK ",
  packname: process.env.PACK_NAME || "👑",
  botname : process.env.BOT_NAME  || " 𝗜𝗕𝗥𝗔𝗛𝗜𝗠-ᵐᵈ",
  ownername:process.env.OWNER_NAME|| "CHADWICK HORACE ",

  sessionName:process.env.SESSION_ID || "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05LWVYzVzJuOWlCOXZ4ejJ0QldDeDFUejU3bndIRlZlY3dpL1BLQmwzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGNQZHlwT0lEbmhZbkVmVjJOK0VJNkR3YjNObUpwZE1QVzQyd1h4Z0dtbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUGw3SGlzbXRkZERJZTl5STlvN3V0V0VaQ2R0aFhubmhLdmNna2g1N2t3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0cm5leER4YWlZUkRlaHpIdzdFeDhaaWJHLzhvSDJ5ZitHd1ZXYnVPQkdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQdVd0UG1YN1VVM3BvbTRrM0RMM3FibFNVb0pjSnNaU1IwYW9DT1RabmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjU1SEd1UWVuSmtvUFZybkRjc3pmL2M0bXNyT1pJWlNlS0FKSDdkMUNoMUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0U3dFUxUlJmSWRxYmVOZ2dXRjNlR282VHZmV2tnelBtNTBZUlZCNjVFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0IzbjdTSFBSTjlSdVRzeGF1L2hvc3M4TVphYVV5cllMZS96aEN3UzQxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVpRUtwYVpGNncwcWpZSWVzenZTUTRPcHNZS0dYM1hlVFJYNlBPNDdpUkxvSmZaUmFKeDdOUEdRZFlhQUl1TmF1bDFoMDRTVHBBeSs1SnhDL3ZseGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiIwVzZOWUgrYkJqbTAyVnFCZ0tDVHBZc2diNXZlWmZlY1V1a09MU1BNTVc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPSkRsUGZ3VFF2cS00bl9sVEI4NXhBIiwicGhvbmVJZCI6IjYwYjYxNjZkLWU3YWEtNDNhYi1hNzdhLTE1ZDQzYmMwNDI4YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SlBRbnVsR0VxOXE5czFxTG1JUTNBNnZPN0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWlWa2haNVFiNGpDRHZkY0RQeng5QVgvRWJJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhBTFNDS1pCIiwibWUiOnsiaWQiOiIyNTQ3OTUyOTc4NTU6NjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0hBRFdJQ0sgSE9SQUNFIOKcqPCfkqsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lQRitPMEhFT3FDdTdFR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZ6ZTZCUmgxWU1NbUpYbm9yV0RRNmhFMTEvTmtNR24vVUUvNUFEUkJUa1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlkyTFU5ZVorYllra0tDMU1mWDNiOVAzOEgzTUdkTjBQUDZQOTVvQ0VNVHljNEJuRkU2cEdNYlR0aGNYKzlQZXpUeEU2ZE14dHhybFJDcytadTl5UEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2dXZsT09XdHk4WXRsNm9TTDdsM0grZmtzZnZJZ2pIbTdjTnlzaW05aGdMbWRLU3pOZWI1TmN2MWVNNmx4U2RzRmNVOVJmcnpSYkpHK201cThMenVodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NTI5Nzg1NTo2NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSYzN1Z1VZZFdEREppVjU2SzFnME9vUk5kZnpaREJwLzFCUCtRQTBRVTVGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE0MzQwMjE1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9UOCJ9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-58b3fbea-acb5-4ae4-bbe7-91c14ba35e3c",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "Dream walker ",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
