exports.run = (Discord,client,msg) => {
   msg.channel.send(`**Pong!** ${msg.author.username} ::: **__${parseInt(client.ping)}ms__**`);
}
