exports.run = (msg,Discord,client,color,arg1) => {
   var google = require('google')
     google.resultsPerPage = 10
     var titles = new Array();
     var desc = new Array();
     var links = new Array();
     if(arg1=='') return;
     google(arg1, (err, res) => {
        if (err) console.log(err);
        var t=new Discord.RichEmbed()
        .setTitle(`Google serch for ${arg1}`)
        .setDescription(`Hey ${msg.author.username}! Click on any link below to find out the result, for more, [Click Here](${res.url})`)
        .setColor(color)
        .setTimestamp(new Date())
        .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
        for (var i = 0; i < res.links.length; i++) {
          var x = (res.links[i].title==null)?'':(res.links[i].title).trim(); // title
          var y = (res.links[i].description==null)?'':(res.links[i].description).trim(); //  description
          var z = (res.links[i].href==null)?'':res.links[i].href.trim(); // link
          titles[i] = (x==''||x==null)?`Search for ${arg1}`:x;
          desc[i] = (y==''||y==null)?'Click here':y;
          links[i] = (z==''||z==null)?res.url:z;
          for(var j=i;j<=i;j++){
             t.addField(`${titles[j]}`,`[${desc[j]}](${links[j]})`)
         }
        }
       msg.channel.send(t)
    });
}
