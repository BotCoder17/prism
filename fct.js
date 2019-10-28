exports.run = (msg,client,Discord,color) => {
   const weeb = require('node-weeb');
 
   weeb.nekoLife('fact').then(res => {
       var data = JSON.parse(res).fact;
       msg.channel.send({embed: { 
             title: 'Everyday Fact',
             description: data,
             color: color
       }});
   });
}
