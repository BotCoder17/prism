const Discord = require("discord.js");
const client = new Discord.Client({
    disableEveryone : true
});
let ownerID=process.env.OWNERID;
let express = require('express');
let https = require('https');
let expsApp = express();

expsApp.get('/', (req, res) => {
  res.sendStatus(200);
});
expsApp.listen(process.env.PORT);
setInterval(() => {
  https.get(process.env.SECRET, (res) => {
   // :)
  }).on('error', (e) => {
    console.error(e);
  });
}, 7000);

client.login(process.env.TOKEN);

var pf=process.env.PREFIX;
client.on('ready', () => {
   console.log(`${client.user.tag} is ready!`);
   let cm=require('./rdy.js');
   cm.run(client,Discord,pf);
});
client.on("message", (msg) => {
  let color=msg.guild.members.get(client.users.get(msg.author.id).id).highestRole.hexColor;
  if(msg.channel.type!='text'||(msg.author.bot)) return;
  /**********/
  let mg=msg.content,ln=pf.length;
  let als=mg.split(' ');
     let cl='';
     for(var i=0;i<als.length;i++){
        if(als[i]!=''){
           cl+=als[i]+' ';
        }
     }
  /**
     pf2=check prefix
     cmd=get all commands
     arg0=user id (for bot)
     arg1=all other texts
  */
  let nonne=cl.split(' '); // get all args [arg[0],arg[1],arg[2] ... arg[n]]
  let arg0='',arg01='';
  let arg1=''; // all other arguments
  let mntns=''; // mentions
  
  let commands_and_prefix=nonne[0],mentions=nonne[1],pf2='',cmd='';
    
     for(var i=0;i<commands_and_prefix.length;i++){
       let yui=commands_and_prefix.charAt(i);
        if(yui!='<'&&yui!='@'&&yui!='>'&&yui!=' '){
           arg0+=yui;  // user id (of bot)
        }
     }
    
    for(var i=0;i<mentions.length;i++){
       let yui=mentions.charAt(i);
        if(yui!='<'&&yui!='@'&&yui!='>'&&yui!=' '){
           arg01+=yui;  // user id (of user)
        }
     }
    
     for(var i=commands_and_prefix.length;i<mg.length;i++) arg1+=mg.charAt(i); 
     for(var i=0;i<ln;i++) pf2+=commands_and_prefix.charAt(i); // get prefix
     for(var i=ln;i<commands_and_prefix.length;i++) cmd+=commands_and_prefix.charAt(i); // get commands
     
     arg0=arg0.trim(); // mention of bot
     arg01=arg01.trim(); // user mention
     arg1=arg1.trim(); // text (no mentions)
/******************/
  if(pf2.toLowerCase()!=pf.toLowerCase()) return;
/*****************/
    let prm=require('./prism.js');  // bot info
    prm.run(msg,client,Discord,color,pf,arg0);
    
    switch(cmd){
        case 'ping':
            let pn=require('./ping.js');
            pn.run(Discord,client,msg);
           // console.log(`arg0 => ${arg0}\narg1 => ${arg1}\ncmd => ${cmd}\npf2 => ${pf2}\narg01 => ${arg01}\ncommands_and_prefix => ${commands_and_prefix}\nmentions => ${mentions}\nmg => ${mg}`);
        break;
        case 'youtube':case 'ytsearch':case 'yt':
            let yt=require('./yt.js');
            yt.run(msg,client,Discord,color,arg1);
        break;
        case 'reboot':case 'reset':
            let rb=require('./reset.js');
            rb.run(msg,client,Discord,color,pf,ownerID);
        break;
        case 'ava':case 'avatar':
            let av=require('./ava.js');
            av.run(msg,client,Discord,color,arg01);
        break;
        case 'whois':
            let wh=require('./userinfo.js');
            wh.run(msg,client,Discord,color,arg01);
        break;
    }
});
