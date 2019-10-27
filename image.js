exports.run = (msg,Discord,client,color,arg1) => {
    const gis = require('g-i-s');
    gis(arg1, (err, res) => {
    if (err) {
       console.log(err);
     }
     else {
       var ran = parseInt(Math.random()*res.length);
       console.log(JSON.parse(JSON.stringify(res, null, '  ')));
       let img=JSON.parse(JSON.stringify(res, null, '  '));
      /* let im=new Discord.RichEmbed()
        .setTitle(`Image search for ${arg1}`)
        .setImage(img[ran].url)
        .setTimestamp(new Date())
        .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
        .setColor(color)*/
        msg.channel.send({embed : {
             image: {
                 url: img[ran].url
             },
             color: color,
             title: `Image search for ${arg1}`,
             timestamp: new Date()
        }});
     }
  });
}
