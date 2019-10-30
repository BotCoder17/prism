exports.run = (msg,client,Discord,color,ownerID) => {
   if(ownerID==msg.author.id){
      //memory usage
      let rss=(process.memoryUsage().rss/1e+6),heapTotal=(process.memoryUsage().heapTotal/1e+6),    //all in MB
          heapUsed=(process.memoryUsage().heapUsed/1e+6),external=(process.memoryUsage().external/1e+6);
      //cpu usage
      let user=(process.cpuUsage().user/6e+7),system=(process.cpuUsage().system/6e+7);  //all in Mins
      //uptime
      let uptime=(Math.floor(process.uptime())/60); // mins
      let st=new Discord.RichEmbed()
             .setTitle('Statistic 📊')
             .addField('Node version',process.version)
             .addField('Memory usage',`**Resident Set Size** : \`${rss} MB\`\n**Total memory remaining** : \`${heapTotal} MB\`\n**Total memory used** : \`${heapUsed} MB\`\n**Memory usage of C++ objects** : \`${external} MB\``)
             .addField('CPU Usage',`**User** : \`${user} mins\`\n**System** : \`${system} mins\``)
             .addField('Uptime',`${uptime} mins`)
             .setThumbnail(client.user.avatarURL)
             .setTimestamp(new Date())
             .setColor(color)
       msg.channel.send(st)
   }
}
