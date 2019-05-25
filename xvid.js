exports.run = (msg,Discord,client,arg1,color) => {
    if(!client.channels.get(msg.channel.id).nsfw) return msg.channel.send(`U can view this only in NSFW enabled channels`);
     const Pornsearch = require('pornsearch');
     const Searcher = new Pornsearch(arg1);
     if(arg1=='') return;
     Searcher.videos()
       .then(videos => {
            let v=Math.floor(Math.random()*videos.length)+1;
            let video=new Discord.RichEmbed()
            .setTitle(`[CLICK HERE] ${videos[v].title}`).setURL(videos[v].url)
            .setImage(videos[v].thumb)
            .setColor(color)
            msg.channel.send(video)
        }).catch((err) => {
          //   console.log(err);
             msg.channel.send(`Can't find the result for the search **${arg1}**`)
        });
}
