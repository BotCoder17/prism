exports.run = (msg,client,Discord,color) => {
      let si=new Discord.RichEmbed()
     .setTitle('Server Info')
     .addField('Name',msg.guild.name)
     .addField('ID',msg.guild.id)
     .addField('Owner',`<@${msg.guild.ownerID}>`)
     .addField('Created At',new Date(msg.guild.createdTimestamp).toGMTString())
     .addField('Region',msg.guild.region)
     .addField('Member Count',msg.guild.memberCount)
     .setThumbnail(msg.guild.iconURL)
     .setColor(color)
     .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)

     msg.channel.send(si)
}
