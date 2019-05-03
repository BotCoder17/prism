const Discord = require("discord.js");
const client = new Discord.Client({
    disableEveryone : true
});
let express = require('express');
let http = require('http');
let expsApp = express();

expsApp.get('/', (req, res) => {
  res.sendStatus(200);
});
expsApp.listen(process.env.PORT);
setInterval(() => {
  http.get(process.env.PROJECT_DOMAIN);
}, 7000);

client.login(process.env.TOKEN);

var pf=process.env.PREFIX;
client.on('ready', () => {
   console.log(`${client.user.tag} is ready!`);
   let cm=require('./rdy.js');
   cm.run(client,Discord,pf);
});

client.on("message", (msg) => {
  let color=msg.guild.members.get(client.users.get(msg.author.id).id).highestRole.hexColor;
  if(msg.channel.type!='text'||(msg.author.bot)) return;
  if (msg.content.startsWith(`${pf}ping`)) {
     let cm=require('./ping.js');  // ping pong
     cm.run(Discord,client,msg);
  }
});
