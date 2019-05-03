exports.run = (msg,client,Discord,color,arg0) => {
    if(arg0!=''){
       client.fetchUser(arg0)
         .then(u => {
             let csd=new Discord.RichEmbed()
             .setTitle('User Info')
             .setColor(color)
             .setThumbnail(u.avatarURL)
             .addField('Name',u.username)
             .addField('ID',u.id)
             .addField('Tag',u.tag)
             .addField('Status',u.presence.status);
             try{
               csd.addField(`Joined ${msg.guild.name} on`,new Date(msg.guild.members.get(cool).joinedTimestamp).toGMTString());
             }catch(err){
               console.log(err);
             }
             csd.addField('Joined Discord on',new Date(u.createdTimestamp).toGMTString())
             .addField('Is a bot?',(u.bot==true)?'Yes':'No');
             msg.channel.send(csd);
         })
          .catch(err => {
             msg.channel.send('That user has left Discord');
         });
    }else{
      let csd=new Discord.RichEmbed()
             .setTitle('User Info')
             .setColor(color)
             .setThumbnail(msg.author.avatarURL)
             .addField('Name',msg.author.username)
             .addField('ID',msg.author.id)
             .addField('Tag',msg.author.tag)
             .addField('Status',msg.author.presence.status);
             try{
               csd.addField(`Joined ${msg.guild.name} on`,new Date(msg.guild.members.get(msg.author.id).joinedTimestamp).toGMTString());
             }catch(err){
               console.log(err);
             }
             csd.addField('Joined Discord on',new Date(msg.author.createdTimestamp).toGMTString())
             .addField('Is a bot?',(msg.author.bot==true)?'Yes':'No');
             msg.channel.send(csd);
    }
}
