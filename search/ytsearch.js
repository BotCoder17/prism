exports.run = (msg,client,Discord,arg1) => {
    const ytSearch = require('yt-search')
    const opts = {
      query: arg1,
      pageStart: 1, 
      pageEnd: 2
    };
    ytSearch(opts, function (err,r) {
       if (err) throw err;
       console.log(r)
       const Pagination = require('discord-paginationembed');
         const embeds = [];
         for (let i = 0; i < r.videos.length; i++)
         embeds.push(new Discord.RichEmbed().setTitle(r.videos[i].title).setURL(`https://www.youtube.com${r.videos[i].url}`).addField('Views',r.videos[i].views).addField('Posted',r.videos[i].ago).addField('Duration',r.videos[i].timestamp));
         new Pagination.Embeds()
              .setArray(embeds)
              .setAuthorizedUsers([msg.author.id])
              .setChannel(msg.channel)
              .setPageIndicator(true)
              .setColor('#c4302b')
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
       const res = r.videos[Math.floor(Math.random()*(r.videos.length))]
       msg.channel.send(`https://www.youtube.com${res.url}`)
    });
}
