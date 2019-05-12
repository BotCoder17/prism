exports.run = (msg,client,Discord,color,arg1) => {
   const weeb = require('node-weeb');
   const nekoLifeJSON = require('./sfw.json');
   weeb.nekoLife(nekoLifeJSON.sfw.eBall, 'img').then(res => {
       var data = JSON.parse(res).url;
       let r=new Discord.RichEmbed()
      .setAuthor(`Question by ${msg.author.username}`, msg.author.avatarURL)
      .setDescription(`\`\`\`${arg1}\`\`\``)
      .setImage(data)
      .setTimestamp(new Date())
      .setColor(color);
      msg.channel.send(r);
  }).catch(console.log);
}
