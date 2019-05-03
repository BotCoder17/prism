exports.run = (msg,client,Discord,color,arg1) => {
  var search = require('youtube-search');
  var opts = {
    maxResults: 7,
    key: process.env.YT_API
  };
  search(arg1, opts, function(err, res) {
    if(err) return console.log(err);
    msg.channel.send(res[0].link)
  });
}
