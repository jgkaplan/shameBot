const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();

let shame = false;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'does it live?') {
    msg.reply('It lives.');
  }
});
client.login(config.token);
