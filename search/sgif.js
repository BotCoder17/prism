exports.run = (msg,client,Discord,color,arg1,gif_api) => {
    var giphy = require('giphy-api')({
       apiKey : gif_api
    });
    console.log(arg1)
    giphy.search({
      q: arg1,
      limit: 100,
      fmt: 'json'
    }, function (err, res) {
        if(msg.channel.permissionsFor('577148201430417409').has("MANAGE_MESSAGES")==true){
      //  console.log(res)
      //  console.log(res.data[0].images)
        const Pagination = require('discord-paginationembed');
         const embeds = [];
         for (let i = 0; i < res.data.length; i++)
            embeds.push(new Discord.RichEmbed().setImage(res.data[i].images.original.url).setTitle(res.data[i].title).setURL(res.data[i].url));
         new Pagination.Embeds()
              .setArray(embeds)
              .setAuthorizedUsers([msg.author.id])
              .setChannel(msg.channel)
              .setPageIndicator(true)
              .setColor(color)
              .setPage(1)
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
               .then(m => {
                  m.delete(10000)
               }).catch(console.log);
          }
    });
}
