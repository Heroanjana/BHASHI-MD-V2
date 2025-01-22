const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "BHASHI-MD~5XEBiL5L#4Pc43rPHW82ZyNcDBQPLgd9JTSnH9HUkSsTWEm0KYU8",
// For extra thing : BHASHI-MD~(megafileid)
  MONGODB: process.env.MONGODB || "mongodb+srv://anjanahero414:i19xa9chxe0WG1RN@cluster0.ujdik.mongodb.net/",

    
 
};
