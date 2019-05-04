exports.run = (msg,client,Discord,color,pf) => {
  /*****/
     let als=msg.content.split(' ');
     let cl='',cool='';
     for(var i=0;i<als.length;i++){
        if(als[i]!=''){
           cl+=als[i]+' ';
        }
     }
     let nonne=cl.split(' ');
     let skd=nonne[0];
     for(var i=0;i<skd.length;i++){
       let yui=skd.charAt(i);
        if(yui!='<'&&yui!='@'&&yui!='>'&&yui!=' '&&yui!='!'){
           cool+=yui;
        }
     }
  /*****/
  if(client.user.id==cool){
   client.fetchApplication()
   .then(p => {
      let d=new Discord.RichEmbed()
      .setTitle('Identification Card')
      .setDescription(`Hey **${msg.author.username}**! type \`${pf}help\` for help!`)
      .setColor(color)
      .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
      .setTimestamp(new Date())
      .setThumbnail(client.user.avatarURL)
      .addField(`Name`,`${client.user.username}`)
      .addField(`ID`,`${client.user.id}`)
      .addField(`Date of Creation`,`${new Date(p.createdTimestamp).toGMTString()}`)
      .addField(`Prefix`,`${pf}`)
      .addField(`Owner`,"["+(p.owner.tag)+"](https://discordapp.com/users/549565970956419073)")
     /* .addField(`Invite ${client.user.username}`,
                "[Click here](https://discordapp.com/api/oauth2/authorize?client_id=550416455532019712&permissions=8&scope=bot)") */
      msg.channel.send(d);
   })
   .catch(console.log);
  }
}
