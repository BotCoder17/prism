exports.run = (msg,client,Discord,color,arg1) => {
    const aztroJs = require("aztro-js")
    let sign = arg1.toLowerCase();
     aztroJs.getAllHoroscope(sign, function(res) {
         try{
             let r=res;
             let cd=r.yesterday.current_date;
             let cd2=r.today.current_date;
             let cd3=r.tomorrow.current_date;
             if(r.today.description=="undefined"||r.tomorrow.description=="undefined"||r.yesterday.description=="undefined"){ return;}
             else{
                let hor=new Discord.RichEmbed()
                   .setTitle(`Horoscope of ${arg1}`)
                   .setColor(color)
                   .setTimestamp(new Date())
                   .setFooter(`For ${msg.author.username}`,msg.author.avatarURL)
                   .addField('Today',`\`\`\`${r.today.description}\`\`\`\nDate : \`${cd2}\`\nLucky Number : \`${r.today.lucky_number}\`\nLucky Time : \`${r.today.lucky_time}\`\nCompatibility : \`${r.today.compatibility}\`\nMood : \`${r.today.mood}\`\nColor : \`${r.today.color}\``)
                   .addField('Tomorrow',`\`\`\`${r.tomorrow.description}\`\`\`\nDate : \`${cd3}\`\nLucky Number : \`${r.tomorrow.lucky_number}\`\nLucky Time : \`${r.tomorrow.lucky_time}\`\nCompatibility : \`${r.tomorrow.compatibility}\`\nMood : \`${r.tomorrow.mood}\`\nColor : \`${r.tomorrow.color}\``)
                   .addField('Yesterday',`\`\`\`${r.yesterday.description}\`\`\`\nDate : \`${cd}\`\nLucky Number : \`${r.yesterday.lucky_number}\`\nLucky Time : \`${r.yesterday.lucky_time}\`\nCompatibility : \`${r.yesterday.compatibility}\`\nMood : \`${r.yesterday.mood}\`\nColor : \`${r.yesterday.color}\``)
               msg.channel.send(hor)
             }
          }catch(err){
              msg.channel.send(`Couldn't find horoscope info for \`${arg1}\``);
          }
     });
}
