exports.run = (msg,client,Discord,color,arg1) => {
    const gis = require('g-i-s');
    gis(arg1, (err, res) => {
       if(err) return;
       var ran = parseInt(Math.floor(Math.random()*res.length));
     //  console.log(JSON.parse(JSON.stringify(res, null, '  ')));
       let img=JSON.parse(JSON.stringify(res, null, '  '));
        console.log(arg1)
        let im=new Discord.RichEmbed()
        .setTitle(`Image search for ${arg1}`)
        .setImage(img[ran].url)
        .setTimestamp(new Date())
        .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
        .setColor(color);
        msg.channel.send(im)
       /* msg.channel.send({embed : {
             image: {
                 url: img[ran].url
             }
        }});*/
  })
}
