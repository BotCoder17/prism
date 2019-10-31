exports.run = (msg,client,Discord,cmd,color,arg1) => {
      let help=require('./help.json');
      let ani="",utl="",sr="",trn=`\`${help.translate[0]}\``,fn="",mem="";
      for(var i=0;i<help.anime.length;i++){
             ani+=(i<(help.anime.length-1))?`\`${help.anime[i]}\` ; `:`\`${help.anime[i]}\``;
      }
      for(var i=0;i<help.utility.length;i++){
             utl+=(i<(help.utility.length-1))?`\`${help.utility[i]}\` ; `:`\`${help.utility[i]}\``;
      }
      for(var i=0;i<help.search.length;i++){
             sr+=(i<(help.search.length-1))?`\`${help.search[i]}\` ; `:`\`${help.search[i]}\``;
      }
      for(var i=0;i<help.fun.length;i++){
             fn+=(i<(help.fun.length-1))?`\`${help.fun[i]}\` ; `:`\`${help.fun[i]}\``;
      }
      for(var i=0;i<help.memes.length;i++){
             mem+=(i<(help.memes.length-1))?`\`${help.memes[i]}\` ; `:`\`${help.memes[i]}\``;
      }
      let em=new Discord.RichEmbed()
      .setTitle('Help Box')
      .addField('Anime',ani)
      .addField('Language Translate',trn)
      .addField('Search stuffs',sr)
      .addField('Fun',fn,true)
      .addField('Memes',mem,true)
      .addField('Utility',utl,true)
      .setColor(color)
      .setThumbnail(client.user.avatarURL)
      .setTimestamp(new Date())
      .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
      
      msg.channel.send(em)
}
