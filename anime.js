exports.run = (msg,Discord,client,color,cmd,arg01) => {
   const weeb = require('node-weeb');
   const sr = require('./sfw.json');
   if(arg01!=''){
     client.fetchUser(arg01)
      .then(u => {
        switch(cmd){
          case 'tickle':
             weeb.nekoLife(sr.sfw.tickle, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`${msg.author.username} tickles u, ${u.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
          break;
          case 'feed':
               weeb.nekoLife(sr.sfw.feed, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`Eat this, ${u.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
          break;
          case 'cuddle':
              weeb.nekoLife(sr.sfw.cuddle, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`${msg.author.username} cuddles u, ${u.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
          break;
          case 'neko':
               weeb.nekoLife(sr.sfw.nekoGif, 'img')
               .then(res => {
                  var t=JSON.stringify(res),json='';
                  for(var i=1;i<t.length-3;i++){
                     let y=t.charAt(i);
                     if(y!='\\') json+=y;
                  }
                  let r=new Discord.RichEmbed()
                     .setTimestamp(new Date())
                     .setTitle(`${msg.author.username} sent a neko for u, ${u.username}`)
                     .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                     .setImage(JSON.parse(json).url)
                     .setColor(color);
                     msg.channel.send(r);
               }).catch(console.log);
          break;
        }
     }).catch(console.log);
   }
}
