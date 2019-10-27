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
      
     var bl=false,bl2=false;
     
    for (var i = 0; i < res.length; i++) {
       // t.addField('\u200B',`[${res[i].title}](${res[i].link})`)
        let tit='',ti=res[i].title, lk=res[i].link,lnk='';
        for(var j=0;j<ti.length;j++){
           if(ti.charAt(j)!=')'&&ti.charAt(j)!='('&&ti.charAt(j)!=']'&&ti.charAt(j)!='['){
               tit+=String(ti.charAt(j));
           }
        }
       for(var j=0;j<lk.length;j++){
           if((lk.charAt(j)!=')'&&lk.charAt(j)=='(')){
               lnk+=String(ti.charAt(j));
               bl=true;
           }
          if(lk.charAt(j)!=']'&&lk.charAt(j)=='['){
             lnk+=String(ti.charAt(j));
               bl2=true;
          }
        }
       if(bl==true) lnk+=')';
       if(bl2==true) lnk+=']';
       t.addField('\u200B',`[${tit}](${lnk})`)
       tit='';
       lnk='';
    }
    msg.channel.send(t)
  }).catch(err => {
    console.log(err)
  })
}
