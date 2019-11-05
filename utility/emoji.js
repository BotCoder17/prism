exports.run = (msg,Discord,client,arg1) => {
     let c=arg1.trim();
     let name='',id='',ani='';
     let ls=c.lastIndexOf(':');
     let fs=c.indexOf(':');
     for(var i=fs;i<ls;i++){
       let c1=c.charAt(i);
       if(c1!='<'&&c1!=':'){
          name+=c1;
       }
     }
    for(var i=ls;i<arg1.length;i++){
    let c1=c.charAt(i);
    if(c1!='>'&&c1!=':'){
       id+=c1;
    }
  }
  for(var i=0;i<fs;i++){
    let c1=c.charAt(i);
    if(c1!='<'&&c1!=':'){
       ani+=c1;
    }
  }
 try{
  if(id.length==18){
    ani=ani.toLowerCase();
    let img=``;
    if(ani=='a'){
      img=`https://cdn.discordapp.com/emojis/${id}.gif?v=1`;
    }else{
      img=`https://cdn.discordapp.com/emojis/${id}.png?v=1`;
    }
    let em=new Discord.Attachment(img);
    msg.channel.send(`**Name : **${name}\n**ID : **${id}\n**Type : **Custom`, {
          file: em.url
    });
  }else{
    let tw = require('twemoji');
    let cd=tw.convert.fromCodePoint(c.codePointAt().toString(16));
    tw.parse(cd, function(icon, options) {
       let op=JSON.parse(JSON.stringify(options));
       const em2 = new Discord.Attachment(`${op.base}${op.size}/${icon}${op.ext}`);
       msg.channel.send(`**Name : **${cd}\n**ID : **${c.codePointAt().toString(16)}\n**Type : **Twemoji`, {
            file: em2
       });
    }); 
  }
 }catch(err){}
}
