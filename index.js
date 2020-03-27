const Discord = require("discord.js");
const client = new Discord.Client({
    disableEveryone : true
});
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login(process.env.TOKEN);
const ownerID=process.env.OWNERID;
const pf=process.env.PREFIX;
const gif_api=process.env.GIF_API;
client.on('ready', () => {
   console.log(`${client.user.tag} is ready for chocolates😋🍫!`);
   let cm=require('./rdy.js');
   cm.run(client,Discord,pf);
});
client.on("message", (msg,err) => {
  if (err) return;
  let color='#'+Math.floor(Math.random()*16777215).toString(16);
  //let color=msg.guild.members.get(client.users.get(msg.author.id).id).highestRole.hexColor;
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
      for(let i=0;i<commands_and_prefix.length;i++){
         let yui=commands_and_prefix.charAt(i);
         if(yui!='<'&&yui!='@'&&yui!='>'&&yui!='!'&&yui!=' '&&(yui.charCodeAt(0)>=48&&yui.charCodeAt(0)<=57)){
            arg0+=yui;  // user id (of bot)
         }
      }
    }catch(err){}
    try{
      for(let i=0;i<mentions.length;i++){
          let yui=mentions.charAt(i);
          if(yui!='<'&&yui!='@'&&yui!='>'&&yui!='!'&&yui!=' '&&(yui.charCodeAt(0)>=48&&yui.charCodeAt(0)<=57)){
             arg01+=yui;  // user id (of user)
          }
       }
    }catch(err){}
     for(let i=commands_and_prefix.length;i<mg.length;i++) arg1+=mg.charAt(i); 
     for(let i=0;i<ln;i++) pf2+=commands_and_prefix.charAt(i); // get prefix
     for(let i=ln;i<commands_and_prefix.length;i++) cmd+=commands_and_prefix.charAt(i); // get commands
     
     arg0=arg0.trim(); // mention of bot
     arg01=arg01.trim(); // user mention
     arg1=arg1.trim(); // text (no mentions)
/******************/
     let indx_cmd=require('./index_commands.js');
     indx_cmd.run(msg,client,Discord,pf,color,arg01,arg1,cmd,pf2,ownerID,gif_api);
     console.log(`arg0 => ${arg0}\narg1 => ${arg1}\ncmd => ${cmd}\npf2 => ${pf2}\narg01 => ${arg01}\ncommands_and_prefix => ${commands_and_prefix}\nmentions => ${mentions}\nmg => ${mg}`);

});
