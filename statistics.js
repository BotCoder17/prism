exports.run = (msg,client,Discord,color,ownerID) => {
   if(ownerID==msg.author.id){
      // versions
      let ver="",jl=parseInt(0);
      var vs = process.versions
      var res = [];
      for(var i in vs)
          res.push([i, vs[i]]);
      for(var i=0;i<res.length;i++)
          ver+=`**${res[i][jl]}** : \`v${res[i][jl+1]}\`\n`;
      //memory usage
      let rss2=(process.memoryUsage().rss/1e+6),
          heapTotal2=(process.memoryUsage().heapTotal/1e+6),    //all in MB
          heapUsed2=(process.memoryUsage().heapUsed/1e+6),
          external2=(process.memoryUsage().external/1e+6);
      
      let rss=(parseInt(rss2)==0)?rss2*1000 + ' KB':(parseInt(rss2)>1024)?rss2/1000 + ' GB':rss2 + ' MB';
      let heapTotal=(parseInt(heapTotal2)==0)?heapTotal2*1000 + ' KB':(parseInt(heapTotal2)>1024)?heapTotal2/1000 + ' GB':heapTotal2 + ' MB';
      let heapUsed=(parseInt(heapUsed2)==0)?heapUsed2*1000 + ' KB':(parseInt(heapUsed2)>1024)?heapUsed2/1000 + ' GB':heapUsed2 + ' MB';
      let external=(parseInt(external2)==0)?external2*1000 + ' KB':(parseInt(external2)>1024)?external2/1000 + ' GB':external2 + ' MB';
      //cpu usage
      let user2=(process.cpuUsage().user/6e+7),
          system2=(process.cpuUsage().system/6e+7);  //all in Mins
      let user=(parseInt(user2)>60)?user2/60 + ' hrs':(parseInt(user2)==0 && parseInt(user2*60)!=0)?user2*60 + ' secs':(parseInt(user2*60)==0)?user2*60000 + ' ms':user2+' mins';
      let system=(parseInt(system2)>60)?system2/60 + ' hrs':(parseInt(system2)==0 && parseInt(system2*60)!=0)?system2*60 + ' secs':(parseInt(system2*60)==0)?system2*60000 + ' ms':system2+' mins';
      //uptime
      let uptime2=(Math.floor(process.uptime())/60); // mins
      let uptime=(parseInt(uptime2)>59)?uptime2/60 + ' hrs':(parseInt(uptime2)<1)?uptime2*60 + ' secs':(parseInt(uptime2/60)>23)?uptime2/1440 + ' days':uptime2 + ' mins';
      let st=new Discord.RichEmbed()
             .setTitle('Statistics 📊')
             .addField('Version',`${ver}`)
             .addField('Memory usage',`**Resident Set Size** : \`${rss}\`\n**Total memory remaining** : \`${heapTotal}\`\n**Total memory used** : \`${heapUsed}\`\n**Memory usage of C++ objects** : \`${external}\``)
             .addField('CPU Usage',`**User** : \`${user}\`\n**System** : \`${system}\``)
             .addField('Uptime',`\`${uptime}\``)
             .setThumbnail(client.user.avatarURL)
             .setTimestamp(new Date())
             .setFooter(`${client.user.username}'s performance`,client.user.avatarURL)
             .setColor(color)
       msg.channel.send(st)
   }
}
