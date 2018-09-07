const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();
const roman = require('roman-numerals');

let match_nickname = /Diogenes ([XVLICMD]+)/;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Getting Over It");
});

client.on('message', msg => {
  if (msg.content === 'does it live?') {
    msg.reply('It lives.');
  }
});

client.on('guildMemberUpdate', (ousr, nusr) => {
    if(ousr.user.id == config.shameUserId && ousr.nickname != nusr.nickname){
        let new_nickname = nusr.nickname;
        let matches = new_nickname.match(match_nickname);
        try{
            let newNumber = 50;
            if(matches.length > 1 && (newNumber = roman.toArabic(matches[1]))){
                ousr.guild.members.get(client.user.id).setNickname("ShameBot " + roman.toRoman(newNumber + 1));
                ousr.guild.channels.find(ch => ch.name === 'general').send(config.shameMessage);
            }
        }catch(err){
            console.log(err);
        }


    }

});
client.login(config.token);
