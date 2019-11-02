exports.run = (msg,client,Discord,color,arg01) => {
    if(arg01!=''){
       client.fetchUser(arg01)
         .then(u => {
           let rls="";
           try{
               msg.guild.members.get(u.id).roles.map(r => {
               if(r.id!=msg.guild.id)
                   rls+=`<@&${r.id}>  `
               else
                  rls+=`${r.name}  `
               })
           }catch(err){}
             let csd=new Discord.RichEmbed()
             .setTitle('User Info')
             .setColor(color)
             .setThumbnail(u.avatarURL)
             .addField('Name',u.username)
             .addField('ID',u.id)
             .addField('Tag',u.tag)
             if(rls!=""){
                csd.addField('Roles',rls)
             }
             csd.addField('Status',u.presence.status);
             try{
               csd.addField(`Joined ${msg.guild.name} on`,new Date(msg.guild.members.get(arg01).joinedTimestamp).toGMTString());
             }catch(err){}
             csd.addField('Joined Discord on',new Date(u.createdTimestamp).toGMTString())
             .addField('Is a bot?',(u.bot==true)?'Yes':'No');
             msg.channel.send(csd);
         })
          .catch(err => {
             msg.channel.send(`Can't find the user`);
         });
    }else{
        let rls="";
               msg.member.roles.map(r => {
               if(r.id!=msg.guild.id)
                   rls+=`<@&${r.id}>  `
               else
                  rls+=`${r.name}  `
               })
      let csd=new Discord.RichEmbed()
             .setTitle('User Info')
             .setColor(color)
             .setThumbnail(msg.author.avatarURL)
             .addField('Name',msg.author.username)
             .addField('ID',msg.author.id)
             .addField('Tag',msg.author.tag)
             .addField('Roles',rls)
             .addField('Status',msg.author.presence.status);
             try{
               csd.addField(`Joined ${msg.guild.name} on`,new Date(msg.guild.members.get(msg.author.id).joinedTimestamp).toGMTString());
             }catch(err){
               console.log(err);
             }
             csd.addField('Joined Discord on',new Date(msg.author.createdTimestamp).toGMTString())
             .addField('Is a bot?',(msg.author.bot==true)?'Yes':'No');
             msg.channel.send(csd)
    }
}
