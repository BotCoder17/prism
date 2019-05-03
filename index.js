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
  
  let nonne=cl.split(' '); // get all args [arg[0],arg[1],arg[2] ... arg[n]]
  let arg0=''; 
  let arg1=''; 
  
  let skd=nonne[1],pf2='',cmm=nonne[0],cmd='';
     for(var i=0;i<skd.length;i++){
       let yui=skd.charAt(i);
        if(yui!='<'&&yui!='@'&&yui!='>'&&yui!=' '){
           arg0+=yui;
        }
     }
     for(var i=cmm.length;i<mg.length;i++) arg1+=skd.charAt(i);
     for(var i=0;i<pf.length;i++) pf2+=cmm.charAt(i); //get prefix
     for(var i=pf.length;i<cmm.length;i++) cmd+=cmm.charAt(i); // get commands
     arg0=arg0.trim(); //mentions
     arg1=arg1.trim(); //text (no mentions)
/**********/
  if(pf2.toLowerCase()!=pf.toLowerCase()) return;
/*****************/
    switch(cmd){
        case 'ping':
            let pn=require('./ping.js');
            pn.run(Discord,client,msg);
        break;
        case 'youtube':case 'ytsearch':case 'yt':
            let yt=require('./yt.js');
            yt.run(msg,client,Discord,color,arg1);
        break;
        case 'reboot':case 'reset':
            let rb=require('./reset.js');
            rb.run(msg,client,Discord,color,pf);
        break;
        case 'ava':case 'avatar':
            let av=require('./ava.js');
            av.run(msg,client,Discord,color,arg0);
        break;
        case 'whois':
            let wh=require('./userinfo.js');
            wh.run(msg,client,Discord,color,arg0);
        break;
        case 'ev':case 'eval':
            let ev=require('./eval.js');
            ev.run(msg,client,Discord,color);
         break;
    }
});
