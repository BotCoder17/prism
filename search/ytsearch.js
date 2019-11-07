exports.run = (msg,client,Discord,arg1) => {
    const ytSearch = require('yt-search')
    const opts = {
      query: arg1,
      pageStart: 1, 
      pageEnd: 2
    };
    ytSearch(opts, function (err,r) {
       if (err) throw err;
       console.log(r.videos[0])
       const Pagination = require('discord-paginationembed');
         const embeds = [];
         for (let i = 0; i < r.videos.length; i++){
             let vd=r.videos[i];
             embeds.push(new Discord.RichEmbed()
                         .setTitle(vd.title).setURL(`https://www.youtube.com${vd.url}`)
                         .addField('Views',vd.views,true)
                         .addField('Posted',vd.ago,true));
         }
         new Pagination.Embeds()
              .setArray(embeds)
              .setAuthorizedUsers([msg.author.id])
              .setChannel(msg.channel)
              .setPageIndicator(true)
              .setColor('#c4302b')
              .setPage(1)
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
