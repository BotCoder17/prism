exports.run = (msg,client,Discord,cmd,color,arg1) => {
    var memeSearch = require('meme-search');
    let srt=['top','new','relevance'], srtr=Math.floor(Math.random()*srt.length);
    switch(cmd){
       case 'dankmemes':case 'dankmeme':
          memeSearch(arg1,{
              'subreddit': 'dankmemes', // dankmemes (default), memes, etc
              'sort': srt[srtr] // optional: top, new, relevance (default)
          },(err, res) => {
             if(err) return msg.channel.send('Mention a topic');
             let r=res;     // Array of meme objects, each meme object of the format { title, image_url }
             let ser=Math.floor(Math.random()*r.length);
             const imgm = new Discord.Attachment(r[ser].image_url);
             let mem=new Discord.RichEmbed()
                .setTitle(r[ser].title).setURL(r[ser].image_url)
                .setImage(imgm)
                .setColor(color)
                .setFooter(`Dankmemes for ${msg.author.username}`,msg.author.avatarURL)
                .setTimestamp(new Date())
             msg.channel.send(mem)
           });
       break;
       case 'memes':case 'meme':
          memeSearch(arg1,{
              'subreddit': 'memes', // dankmemes (default), memes, etc
              'sort': srt[srtr] // optional: top, new, relevance (default)
          },(err, res) => {
             if(err) return msg.channel.send('Mention a topic');
             let r=res;     // Array of meme objects, each meme object of the format { title, image_url }
             let ser=Math.floor(Math.random()*r.length);
             const imgm2 = new Discord.Attachment(r[ser].image_url);
             let mem=new Discord.RichEmbed()
                .setTitle(r[ser].title).setURL(r[ser].image_url)
                .setImage(imgm2)
                .setColor(color)
                .setFooter(`Memes for ${msg.author.username}`,msg.author.avatarURL)
                .setTimestamp(new Date())
             msg.channel.send(mem)
           });
       break;
       case 'funny':case 'funnymemes':case 'funnymeme':
          memeSearch(arg1,{
              'subreddit': 'funny', // dankmemes (default), memes, etc
              'sort': srt[srtr] // optional: top, new, relevance (default)
          },(err, res) => {
             if(err) return msg.channel.send('Mention a topic');
             let r=res;     // Array of meme objects, each meme object of the format { title, image_url }
             let ser=Math.floor(Math.random()*r.length);
             const imgm3 = new Discord.Attachment(r[ser].image_url);
             let mem=new Discord.RichEmbed()
                .setTitle(r[ser].title).setURL(r[ser].image_url)
                .setImage(imgm3)
                .setColor(color)
                .setFooter(`Funny memes for ${msg.author.username}`,msg.author.avatarURL)
                .setTimestamp(new Date())
             msg.channel.send(mem)
           });
       break;
        case 'gifmemes':case 'gifmeme':case 'gmeme':case 'gmemes':
          memeSearch(arg1,{
              'subreddit': 'gifs', // dankmemes (default), memes, etc
              'sort': srt[srtr] // optional: top, new, relevance (default)
          },(err, res) => {
             if(err) return msg.channel.send('Mention a topic');
             let r=res;     // Array of meme objects, each meme object of the format { title, image_url }
             let ser=Math.floor(Math.random()*r.length);
             const imgm4 = new Discord.Attachment(r[ser].image_url);
             let mem=new Discord.RichEmbed()
                .setTitle(r[ser].title).setURL(r[ser].image_url)
                .setImage(imgm4)
                .setColor(color)
                .setFooter(`Gif memes for ${msg.author.username}`,msg.author.avatarURL)
                .setTimestamp(new Date())
             msg.channel.send(mem)
           });
       break;
    }
}
