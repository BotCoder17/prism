exports.run = (msg,Discord,client,arg1,color) => {
    if(!client.channels.get(msg.channel.id).nsfw) return msg.channel.send(`U can view this only in NSFW enabled channels`);
     const Pornsearch = require('pornsearch');
     if(arg1=='') return;
     const Searcher = new Pornsearch(arg1);
     Searcher.gifs()
       .then(gifs => {
            let g=Math.floor(Math.random()*gifs.length)+1;
            let gif=new Discord.RichEmbed()
            .setImage(gifs[g].url)
            .setTitle(gifs[g].title)
            .setColor(color)
            msg.channel.send(gif)
        }).catch((err) => {
           //  console.log(err);
             msg.channel.send(`Can't find the result for the search **${arg1}**`)
        });
}
