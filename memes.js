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
             let mem=new Discord.RichEmbed()
                .setTitle(r[ser].title).setURL(r[ser].image_url)
                .setImage(r[ser].image_url)
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
             let mem=new Discord.RichEmbed()
                .setTitle(r[ser].title).setURL(r[ser].image_url)
                .setImage(r[ser].image_url)
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
             let mem=new Discord.RichEmbed()
                .setTitle(r[ser].title).setURL(r[ser].image_url)
                .setImage(r[ser].image_url)
                .setColor(color)
                .setFooter(`Funny memes for ${msg.author.username}`,msg.author.avatarURL)
                .setTimestamp(new Date())
             msg.channel.send(mem)
           });
       break;
        case 'gifs':case 'gif':case 'gifmemes':case 'gifmeme':
          memeSearch(arg1,{
              'subreddit': 'gifs', // dankmemes (default), memes, etc
              'sort': srt[srtr] // optional: top, new, relevance (default)
          },(err, res) => {
             if(err) return msg.channel.send('Mention a topic');
             let r=res;     // Array of meme objects, each meme object of the format { title, image_url }
             let ser=Math.floor(Math.random()*r.length);
             let mem=new Discord.RichEmbed()
                .setTitle(r[ser].title).setURL(r[ser].image_url)
                .setImage(r[ser].image_url)
                .setColor(color)
                .setFooter(`Gif memes for ${msg.author.username}`,msg.author.avatarURL)
                .setTimestamp(new Date())
             msg.channel.send(mem)
           });
       break;
    }
}
