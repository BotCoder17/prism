exports.run = (msg,Discord,client,color,arg1) => {
     let c=arg1;
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
     console.log(arg1)
try{
  if(id.length==18){
    ani=ani.toLowerCase();
    let y=new Discord.RichEmbed()
    .setDescription(`**Name : **${name}\n**ID : **${id}\n**Type : **Custom`)
    .setColor(color)
    if(ani=='a'){
      y.setImage(`https://cdn.discordapp.com/emojis/${id}.gif?v=1`);
    }else{
      y.setImage(`https://cdn.discordapp.com/emojis/${id}.png?v=1`);
    }
    msg.channel.send(y);
  }else{
    let tw = require('twemoji');
    let cd=tw.convert.fromCodePoint(c.codePointAt().toString(16));
    tw.parse(cd, function(icon, options) {
       let op=JSON.parse(JSON.stringify(options));
       let y=new Discord.RichEmbed()
        .setDescription(`**Name : **${cd}\n**ID : **${c.codePointAt().toString(16)}\n**Type : **Twemoji`)
        .setColor(color)
        .setImage(`${op.base}${op.size}/${icon}${op.ext}`);
        msg.channel.send(y);
    }); 
  }
 }catch(err){}
}
