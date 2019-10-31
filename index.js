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
   console.log(`${client.user.tag} is ready for chocolates😋🍫!`);
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
         if(yui!='<'&&yui!='@'&&yui!='>'&&yui!='!'&&yui!=' '&&(yui.charCodeAt(0)>=48&&yui.charCodeAt(0)<=57)){
            arg0+=yui;  // user id (of bot)
         }
      }
    }catch(err){};    
    try{
      for(var i=0;i<mentions.length;i++){
          let yui=mentions.charAt(i);
          if(yui!='<'&&yui!='@'&&yui!='>'&&yui!='!'&&yui!=' '&&(yui.charCodeAt(0)>=48&&yui.charCodeAt(0)<=57)){
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
   let indx_cmd=require('./index_commands.js');
   indx_cmd.run(msg,client,Discord,pf,color,arg0,arg01,arg1,cmd,pf2,ownerID);
});
