exports.run = (msg,client,Discord,color) => {
   const DadJokes = require('dadjokes-wrapper');
   const dj = new DadJokes();
 
   dj.randomJoke()
     .then(res => { 
         let jk=new Discord.RichEmbed()
         .setTitle('Joke')
         .setDescription(res)
         .setColor(color)
         .setTimestamp(new Date())
         .setFooter(`Joke for ${msg.author.username}`,msg.author.avatarURL)
         
         msg.channel.send(jk)
     }).catch(err => console.error(err));
}
