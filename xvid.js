exports.run = (msg,Discord,client,arg1,color) => {
    if(!client.channels.get(msg.channel.id).nsfw) return msg.channel.send(`U can view this only in NSFW enabled channels`);
    const Pornsearch = require('pornsearch');
     const Searcher = new Pornsearch('fuck');
     Searcher.gifs()
       .then(gifs => {
            let gif=new Discord.RichEmbed()
            .setImage(gifs[1].url)
            .setTitle(gifs[1].title)
            .setColor(color)
            msg.channel.send(gif)
        });
}
