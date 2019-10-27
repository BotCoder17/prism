exports.run = (msg,Discord,client,color,arg1) => {
   const  googleIt = require('google-it')
  
   googleIt({'query': arg1})
     .then(res => {
     var t=new Discord.RichEmbed()
        .setTitle(`Google search for ${arg1}`)
        .setThumbnail('https://pluspng.com/img-png/google-logo-png-open-2000.png')
        .setColor(color)
        .setTimestamp(new Date())
        .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
    
    for (var i = 0; i < res.length; i++) {
        t.addField(res[i].title,'[View the result]('+(res[i].link)+')')
    }
    msg.channel.send(t)
  }).catch(err => {
    console.log(err)
  })
}
