exports.run = (msg,client,Discord,color) => {
    var xkcd = require('xkcd');
    let num = Math.floor(Math.random()*2000)
    xkcd(num,function (data) {
        let xc=new Discord.RichEmbed()
        .setTitle(data.title);
        if(data.alt!=''){
           xc.setDescription(data.alt)
        }
        xc.setImage(data.img)
        .setColor(color)
        .setFooter(`Xkcd for ${msg.author.username}`,msg.author.avatarURL)
        .setTimestamp(new Date())
        
        msg.channel.send(xc)
    });
}
