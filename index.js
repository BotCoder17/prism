const Discord = require("discord.js");
const client = new Discord.Client({
    disableEveryone : true
});
let ownerID=process.env.OWNERID;

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  //console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login(process.env.TOKEN);

var pf=process.env.PREFIX;
client.on('ready', () => {
   console.log(`${client.user.tag} is here for chocolates😋🍫!`);
   let cm=require('./rdy.js');
   cm.run(client,Discord,pf);
});
client.on("message", (msg,err) => {
  if (err) return;
  let color=msg.guild.members.get(client.users.get(msg.author.id).id).highestRole.hexColor;
  if(msg.channel.type!='text'||(msg.author.bot)) return;
  /**********/
  let mg=msg.content, ln=pf.length;
  let als=mg.split(' ');
     let cl='';
     for(var i=0;i<als.length;i++){
        if(als[i]!=''){
           cl+=als[i]+' ';
        }
     }
    cl=cl.trim();
  /**
     pf2=check prefix
     cmd=get all commands
     arg0=user id (for bot)
     arg01=user id (for user)
     arg1=all other texts
  */
  let nonne=cl.split(' '); // get all args [arg[0],arg[1],arg[2] ... arg[n]]
  let arg0='',arg01='';
  let arg1=''; // all other arguments
  let mntns=''; // mentions
  
  let commands_and_prefix=nonne[0],mentions=nonne[1],pf2='',cmd='';
    try{
      for(var i=0;i<commands_and_prefix.length;i++){
         let yui=commands_and_prefix.charAt(i);
         if(yui!='<'&&yui!='@'&&yui!='>'&&yui!=' '&&(yui.charCodeAt(0)>=48&&yui.charCodeAt(0)<=57)){
            arg0+=yui;  // user id (of bot)
         }
      }
    }catch(err){};    
    try{
      for(var i=0;i<mentions.length;i++){
          let yui=mentions.charAt(i);
          if(yui!='<'&&yui!='@'&&yui!='>'&&yui!=' '&&(yui.charCodeAt(0)>=48&&yui.charCodeAt(0)<=57)){
             arg01+=yui;  // user id (of user)
          }
       }
    }catch(err){};
     for(var i=commands_and_prefix.length;i<mg.length;i++) arg1+=mg.charAt(i); 
     for(var i=0;i<ln;i++) pf2+=commands_and_prefix.charAt(i); // get prefix
     for(var i=ln;i<commands_and_prefix.length;i++) cmd+=commands_and_prefix.charAt(i); // get commands
     
     arg0=arg0.trim(); // mention of bot
     arg01=arg01.trim(); // user mention
     arg1=arg1.trim(); // text (no mentions)
/******************/
  if(pf2.toLowerCase()!=pf.toLowerCase()) {
      let prm=require('./btinfo.js');  // bot info
      prm.run(msg,client,Discord,color,pf,arg0);
  }
/*****************/
 else if(pf2.toLowerCase()==pf.toLowerCase()){
    let anime=require('./anime.js');
    anime.run(msg,Discord,client,color,cmd,arg01);
    switch(cmd){
        case 'ping':
            let ping=require('./ping.js');
            ping.run(Discord,client,msg);
        break;
        case 'img':case 'image':
            let img=require('./image.js');
            img.run(msg,client,Discord,color,arg1);
        break;
        case 'google':case 'ggl':
            let google=require('./google.js');
            google.run(msg,Discord,client,color,arg1);
        break;
        case 'trn': case 'translate':
            let trn=require('./trn.js');
            trn.run(msg,Discord,client,color,arg1);
        break;
        case 'dict': case 'dictionary':
            let dict=require('./gendic.js');
            dict.run(msg,client,Discord,color,arg1,pf);
        break;
        case 'ev': case 'eval':
            let eval=require('./eval.js');
            eval.run(msg,client,Discord,color,ownerID);
        break;
        case 'emoji':
            let emoji=require('./emoji.js');
            emoji.run(msg,Discord,client,color,arg01);
        break;
        case 'weather':
            let weather=require('./temp.js');
            weather.run(msg,client,color,Discord,arg1);
        break;
        case 'say':
            let say=require('./say.js');
            say.run(msg,arg1);
        break;
        case 'ub': case 'urban':
            let urban=require('./urban.js');
            urban.run(msg,Discord,client,color,arg1);
        break;
        case 'res':case 'restart':
            let rb=require('./restart.js');
            rb.run(msg,client,Discord,color,pf,ownerID);
        break;
        case 'ava':case 'avatar':
            let ava=require('./ava.js');
            ava.run(msg,client,Discord,color,arg01);
        break;
        case 'whois': case 'userinfo':
            let whois=require('./userinfo.js');
            whois.run(msg,client,Discord,color,arg01);
        break;
        case '8ball':case '8b':
            let eball=require('./eball.js');
            eball.run(msg,client,Discord,color,arg1);
        break;
    }
  }else {return;}
   // console.log(`arg0 => ${arg0}\narg1 => ${arg1}\ncmd => ${cmd}\npf2 => ${pf2}\narg01 => ${arg01}\ncommands_and_prefix => ${commands_and_prefix}\nmentions => ${mentions}\nmg => ${mg}`);
});
