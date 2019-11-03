exports.run = (msg,client,Discord,color,arg1,gif_api) => {
    var giphy = require('giphy-api')({
       apiKey : gif_api
    });
    giphy.random({
      tag: arg1,
      fmt: 'json'
    }, function (err, res) {
        if(err) return;
        let g=new Discord.RichEmbed()
           .setTitle(`GIF search for ${arg1}`)
           .setImage(res.data.image_url)
           .setColor(color)
           .setTimestamp(new Date())
           .setFooter(`For ${msg.author.username}`,msg.author.avatarURL)
        msg.channel.send(g)
    });
}
