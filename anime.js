exports.run = (msg,Discord,client,cmd,arg01) => {
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
        }
     }).catch(console.log);
   }
}
