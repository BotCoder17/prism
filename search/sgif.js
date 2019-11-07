exports.run = (msg,client,Discord,color,arg1,gif_api) => {
    var giphy = require('giphy-api')({
       apiKey : gif_api
    });
    giphy.search({
      q: arg1,
      limit: 10,
      fmt: 'json'
    }, function (err, res) {
        if(err) return;
      //  console.log(res)
      //  console.log(res.data[0].images)
        const Pagination = require('discord-paginationembed');
         const embeds = [];
         for (let i = 0; i < res.data.length; i++)
            embeds.push(new Discord.RichEmbed().setImage(res.data[i].images.preview_gif.url).setTitle(res.data[i].title).setURL(res.data[i].url));
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
    });
}
