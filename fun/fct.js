exports.run = (msg,client,Discord,color) => {
   const weeb = require('node-weeb');
 
   weeb.nekoLife('fact').then(res => {
       var data = JSON.parse(res).fact;
       var fc=new Discord.RichEmbed()
             .setTitle('Everyday Facts')
             .setDescription(data)
             .setColor(color)
       msg.channel.send(fc)
   });
}
