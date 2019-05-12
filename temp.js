exports.run = (msg,client,color,Discord,arg1) => {
   var weather = require('weather-js');
   weather.find({search: arg1, degreeType: 'C'}, function(err, result) {
      if(err) console.log(err);
      let j2=JSON.parse(JSON.stringify(result));
      let ds=new Discord.RichEmbed()
      .setTitle(`Weather Forecast`)
      .addField(`Location`,`**Name :** ${j2[0].location.name}\n**Latitude :** ${j2[0].location.lat}\n**Longitude :** ${j2[0].location.long}`)
      .addField(`Observation`,`**Time : **${j2[0].current.observationtime}\n**Date : **${j2[0].current.date}\n**Day : **${j2[0].current.day}`)
      .addField(`Forecast`,`**Temperature : **${j2[0].current.temperature}°C \`${(parseInt(j2[0].current.temperature)*9/5) + 32}°F\`\n**Feels Like : **${j2[0].current.feelslike}°C \`${(parseInt(j2[0].current.feelslike)*9/5) + 32}°F\`\n**Vision : **${j2[0].current.skytext}\n**Humidity : **${j2[0].current.humidity}%\n**Wind Speed : **${j2[0].current.winddisplay}`)
      .setColor(color)
      .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
      .setTimestamp(new Date())
      .setThumbnail(j2[0].current.imageUrl)
     msg.channel.send(ds);
    }).catch(console.log);
}
