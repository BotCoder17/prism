exports.run = (msg,client,Discord,arg1) => {
    const ytSearch = require('yt-search')
    const opts = {
      query: arg1,
      pageStart: 1, 
      pageEnd: 3
    };
    ytSearch(opts, function (err,r) {
       if (err) throw err;
       console.log(r)
       const res = r.videos[Math.floor(Math.random()*(r.videos.length))]
       msg.channel.send(`https://www.youtube.com${res.url}`)
    });
}
