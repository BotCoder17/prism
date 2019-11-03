exports.run = (msg,Discord,client,color,arg1) => {
    var urban = require('urban');
    urban(arg1).first(function(ub) {
         try{
            let uby=ub.definition,def='',uex=ub.example,uexx='';
            for(var i=0;i<uby.length;i++){
               if(uby.charAt(i)=='['||uby.charAt(i)==']'){
                  def+='__';
               }else{
                 def+=uby.charAt(i);
               }
            }
            for(var i=0;i<uex.length;i++){
               if(uex.charAt(i)=='['||uex.charAt(i)==']'){
                  uexx+='__';
               }else{
                 uexx+=uex.charAt(i);
               }
            }   
            let ubr = new Discord.RichEmbed()
            .setTitle(`Urban meaning for ${ub.word}`).setURL(ub.permalink)
            .setColor(color)
            .setDescription(def)
            .addField('Example',uexx)
            .addField('Author',ub.author)
            .addField('Written on',new Date(ub.written_on).toGMTString())
            .setTimestamp(new Date())
            .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL);
            msg.channel.send(ubr);
          }catch(err){
             msg.channel.send(`Couldn't find any urban meaning for **${arg1}**`);
             console.log(err)
          }
      });
}
