exports.run = (msg,client,Discord,color,arg01) => {
    if(arg01!=''){
       client.fetchUser(arg01)
         .then(u => {
           let avva=new Discord.RichEmbed()
           .setColor(color)
           .setTimestamp(new Date())
           .setAuthor(`${u.username}'s avatar`, u.avatarURL);
           let sdg=u.avatarURL.split('?');
           if(sdg[1]!='size=2048'){
              avva.setImage(`${u.avatarURL}?size=2048`);
           }else{
              avva.setImage(u.avatarURL);
           }
           avva.setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL);
           msg.channel.send(avva);
       })
      .catch(console.log);
    }else{
      let avva=new Discord.RichEmbed()
           .setColor(color)
           .setTimestamp(new Date())
           .setAuthor(`${msg.author.username}'s avatar`, msg.author.avatarURL)
           let sdg=msg.author.avatarURL.split('?');
           if(sdg[1]!='size=2048'){
              avva.setImage(`${msg.author.avatarURL}?size=2048`);
           }else{
              avva.setImage(msg.author.avatarURL);
           }
          // avva.setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL);
           msg.channel.send(avva);
    }
}
