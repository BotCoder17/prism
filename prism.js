exports.run = (msg,client,Discord,color,pf,arg0) => {
  if(client.user.id==arg0){
      let d=new Discord.RichEmbed()
      .setTitle('Identification Card')
      .setDescription(`Hey **${msg.author.username}**! type \`${pf}help\` for help!`)
      .setColor(color)
      .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
      .setTimestamp(new Date())
      .setThumbnail(client.user.avatarURL)
      .addField(`Name`,`${client.user.username}`)
      .addField(`ID`,`${client.user.id}`)
      .addField(`Date of Creation`,`${new Date(client.user.createdAt).toGMTString()}`)
      .addField(`Prefix`,`${pf}`)
    /*  .addField(`Owner`,"["+(p.owner.tag)+"](https://discordapp.com/users/549565970956419073)")
      .addField(`Invite ${client.user.username}`,
                "[Click here](https://discordapp.com/api/oauth2/authorize?client_id=550416455532019712&permissions=8&scope=bot)") */
      msg.channel.send(d);
  }
}
