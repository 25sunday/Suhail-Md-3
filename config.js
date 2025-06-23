const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]═══════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website =process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255626753818";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_39_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDksXG4gICAgICAgIDcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICA2NyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk2LFxuICAgICAgICA5NixcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicTdJU0U3cTEweGVwMHJJaU43Nnp6NkNCQnZIVkJtcElUTnJLa1lTOE45TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibjFEM2RkNnRTNS11aHBEbnBGdmUtd1wiLFxuICBcInBob25lSWRcIjogXCJlMWU2YzNmZS0yZDg1LTRiNDctOTZiNC0yOWFiNWIwNDg3Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICA4NixcbiAgICAgIDE4MCxcbiAgICAgIDYwLFxuICAgICAgNzksXG4gICAgICAxNDUsXG4gICAgICAxMjEsXG4gICAgICA1MSxcbiAgICAgIDEzNSxcbiAgICAgIDIxNyxcbiAgICAgIDQ1LFxuICAgICAgMTgzLFxuICAgICAgMTgsXG4gICAgICAxMzYsXG4gICAgICAyMzUsXG4gICAgICA3OCxcbiAgICAgIDExMCxcbiAgICAgIDM3LFxuICAgICAgMCxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgMjEyLFxuICAgICAgMTAwLFxuICAgICAgMjE2LFxuICAgICAgODksXG4gICAgICAyMjYsXG4gICAgICAxMCxcbiAgICAgIDYyLFxuICAgICAgNjEsXG4gICAgICAyMDgsXG4gICAgICAyMzMsXG4gICAgICAyMjAsXG4gICAgICAyMzksXG4gICAgICAxOCxcbiAgICAgIDExLFxuICAgICAgMTA5LFxuICAgICAgMjMxLFxuICAgICAgMjQ5LFxuICAgICAgMTI3LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGEvdVlzR0VPRGQ1TUlHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxM1E2d0MxcFFlTmYvVlFzdmJUSWNzbnFEODE2cUVlZ091YUlLWXhrM0IwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNjeWFZcHdYSG9XdFZkSGJHRmdSYWh1cFE3SC94OWI4T29RT2E1dXptdU5iZCtDNWczS3dtM0ZXQ1o1U3ZWZjJpR3N2SGlkTXdiSmp1cXJKQjRocUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImk1SnVkSWJ0VVRXcFFyT2I0cVVyWTJ3QnIzajNndHdTMG5wWDA0T2FiNHJUcWovTzNQVmxUd1JqRVpUQjI3Wmpzc1BSQzl4VFBDQThEa2piZDVUV0JRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI2NzUzODE4OjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QivCdkJrwnZCk8J2QmiDwnZCM8J2QrvCdkKLwnZCm8J2Qm/CdkJrwnZCj8J2QolwiLFxuICAgIFwibGlkXCI6IFwiMjMwMTUwMjM1MDA1MDM0OjkwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjI2NzUzODE4OjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MDY3NTE3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxTOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFM4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibFhZQnovTlYya3p6WHE2NVFjNittWm9tcFc3SkMyems5QUJ1amYzaDRLOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjM0NjIzNDE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTA2NjUyNTI1ODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "Kalulu Sunday" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kalulu-Bot",
  ownername:process.env.OWNER_NAME|| "Mr. Kalulu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
