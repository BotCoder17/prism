exports.run = (msg,client,Discord,color,arg1,pf) => {
   try{
      const df = require('word-definition');
      df.getDef(arg1, "en", null, function(def) {
         if(def.definition!=undefined){
           let dc=new Discord.RichEmbed()
             .setTitle(`Dictionary search for \`${arg1}\``)
             .setDescription(def.definition)
             .addField(`Type`,def.category)
             .addField(`Suitable word`,def.word)
             .setColor(color)
             .setTimestamp(new Date())
             .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
         msg.channel.send(dc);
    }else{
      msg.channel.send(`I failed to search the word **${arg1}** from general dictionary, oh but wait... u can try to find the meaning on urban dictionary.\nDo \`${pf}urban ${arg1}\` for that`);
    }
});
   }catch(err){
       console.log(err);
   }
}
