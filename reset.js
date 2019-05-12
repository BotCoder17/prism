exports.run = (msg,client,Discord,color,pf,ownerID) => {
    if(msg.author.id==ownerID){
       msg.channel.send(`Resetting... **${client.user.tag}**`)
       .then(client.destroy())
       .then(client.login(process.env.TOKEN));
        client.on('ready', () => {
            msg.channel.send(`**${client.user.tag}** is online! took ${parseInt(client.ping)}ms`);
        });
     }
}
