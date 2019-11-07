exports.run = (msg,client,Discord,arg1) => {
    const ytSearch = require('yt-search')
    const getThumb = require('video-thumbnail-url')
    const opts = {
      query: arg1,
      pageStart: 1, 
      pageEnd: 10
    };
    ytSearch(opts, function (err,r) {
       if (err) throw err;
       const Pagination = require('discord-paginationembed');
         const embeds = [];
         for (let i = 1; i < r.videos.length; i++){
             let vd=r.videos[i]
             embeds.push(new Discord.RichEmbed()
                         .setImage(vid)
                         .setTitle(vd.title).setURL(getThumb(`https://www.youtube.com${vd.url}`).then((tmb) => tmb))
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
                  back: '◀️',
                  forward: '▶️',
                  jump: '🔢',
                  delete: '🗑'
               })
              .build();
    });
}
