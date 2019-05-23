exports.run = (msg,Discord,client,arg1) => {
    if(client.channels.get(msg.channel.id).nsfw==false) return msg.channel.send(`U can view this only in NSFW enabled channels`);
}
