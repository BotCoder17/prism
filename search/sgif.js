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
        console.log(res)
       // console.log(res.data[0].images)
        let g=new Discord.RichEmbed()
           .setTitle(res.data[0].title).setURL(res.data[0].url)
           .setImage(res.data[0].images.downsized_large.url)
           .setColor(color)
           .setTimestamp(new Date())
           .setFooter(`For ${msg.author.username}`,msg.author.avatarURL)
        msg.channel.send(g)
    });
}
