exports.run = (msg,Discord,client,color,cmd,arg01) => {
   const weeb = require('node-weeb');
   const sr = require('./sfw.json');
  /*
      "foxGirl": "fox_girl",
      "kemonomimi": "kemonomimi",
      "holo": "holo",
      "woof": "woof"
  */
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
          case 'slap':
            weeb.nekoLife(sr.sfw.slap, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`${msg.author.username} slapped u, ${u.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
         break;
         case 'poke':
            weeb.nekoLife(sr.sfw.poke, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`${msg.author.username} poked u, ${u.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
         break;
         case 'pat':
           weeb.nekoLife(sr.sfw.pat, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`${msg.author.username} pats u, ${u.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
         break;
         case 'kiss':
            weeb.nekoLife(sr.sfw.kiss, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`${msg.author.username} kissed u, ${u.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
         break;
         case 'hug':
            weeb.nekoLife(sr.sfw.hug, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`${msg.author.username} hugged u, ${u.username}`)
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
          case 'smug':
            weeb.nekoLife(sr.sfw.smug, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`${msg.author.username} just smugged, ${u.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
          break;
          case 'baka':
            weeb.nekoLife(sr.sfw.baka, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`${msg.author.username} called u baka, ${u.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
          break;
        }
     }).catch(console.log);
   }else{
     switch(cmd){
       case 'neko':
         weeb.nekoLife(sr.sfw.neko, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`Here's a neko for u, ${msg.author.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
       break;
       case 'meow':case 'cat':
            weeb.nekoLife(sr.sfw.meow, 'img')
               .then(res => {
                  let r=new Discord.RichEmbed()
                 .setTimestamp(new Date())
                 .setTitle(`Meow! ${msg.author.username}`)
                 .setFooter(`from ${msg.author.username}`,msg.author.avatarURL)
                 .setImage(JSON.parse(res).url)
                 .setColor(color);
                  msg.channel.send(r);
               }).catch(console.log);
          break;
      }
   }
}
