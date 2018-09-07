const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();

let shame = false;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(config.token);
