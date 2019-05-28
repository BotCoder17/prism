exports.run = (msg,client,Discord,color,pf,ownerID) => {
    if(msg.author.id==ownerID){
       var t=new Date(client. readyAt).toGMTString().split(' ');
       var s=t[4].split(':');
       var h=parseInt(s[0]),m=parseInt(s[1]),h1=0,tp='am';
       h+=5;m+=30;
       if(m>59){
          m-=60;
          h+=1;
       }
       if(m<10) m='0'+m;
   //    msg.channel.send(h+':'+m) // 24 hrs
       if(h>12){
          h1=h-12;
          tp='pm';
       }else tp='am';
       // msg.channel.send(h1+':'+m+' '+tp) // 12 hrs
       msg.channel.send(`Resetting... **${client.user.tag}**`)
       .then(client.destroy())
       .then(client.login(process.env.TOKEN));
        client.on('ready', () => {
            msg.channel.send(`**${client.user.tag}** is online! **${h1}+':'+${m}+' '+${tp}** \`(IST)\``);
        });
     }
}
