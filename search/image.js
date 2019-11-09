exports.run = (msg,client,Discord,color,arg1) => {
    const gis = require('g-i-s');
     if(msg.channel.nsfw==false) { 
        msg.channel.send('You can view results only in NSFW enabled channels')
        .then(m => {
            m.delete(10000)
        }).catch(console.log)
    }else{
       gis(arg1, (err, res) => {
        if(msg.channel.permissionsFor('577148201430417409').has("MANAGE_MESSAGES")==true){
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
            }else{
               msg.channel.send('I must have the `MANAGE MESSAGE` permission enabled if you want me to send result')
                  .then(m =>{
                       m.delete(10000)
               }).catch(console.log)
            }
        })
    }
}
