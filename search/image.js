exports.run = (msg,client,Discord,color,arg1) => {
    const gis = require('g-i-s');
    if(msg.channel.nsfw==true){
       gis(arg1, (err, res) => {
         if(err) return;
         let img=JSON.parse(JSON.stringify(res, null, '  '));
         const Pagination = require('discord-paginationembed');
         const embeds = [];
         for (let i = 0; i < img.length; i++)
            embeds.push(new Discord.RichEmbed().setImage(img[i].url));
         new Pagination.Embeds()
              .setArray(embeds)
              .setAuthorizedUsers([msg.author.id])
              .setChannel(msg.channel)
              .setPageIndicator(true)
              .setColor(color)
              .setPage(1)
              .setTitle(`Image search for ${arg1}`)
              .setTimeout(69000)
              .setNavigationEmojis({
                  back: '◀',
                  forward: '▶',
                  jump: '🔢',
                  delete: '🗑'
               })
              .build();
        })
    }else{
        msg.channel.send(`You can view results only in NSFW enabled channels`);
    }
}
