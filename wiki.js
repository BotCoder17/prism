exports.run = (msg,client,Discord,color,arg1) => {
     const Intlpedia = require('intl-wikipedia')
     const searchTerm = arg1
     const intlpedia = new Intlpedia('en')
intlpedia.search(searchTerm)
  .then(page => {
        //console.log(page);
        let sumry=page.summary,sumres='';
        for(var i=0;i<1800;i++){
          sumres+=String(sumry.charAt(i));
        }
        let wik=new Discord.RichEmbed()
        .setTitle(page.name)
        .setDescription(`${sumres} [Read more...](https://en.wikipedia.org/wiki/${page.name})`)
        .setColor(color)
        .setTimestamp(new Date())
        .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
        msg.channel.send(wik)
  }).catch(err => console.error(err))
}
