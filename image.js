exports.run = (msg,Discord,client,color,arg1) => {
    const gis = require('g-i-s');
    gis(arg1, (err, res) => {
     if (err) {
       console.log(err);
     }
     else {
       let ran = parseInt(Math.random()*res.length);
       let img=JSON.parse(JSON.stringify(res, null, '  '));
       /*let im = {
            color: color,
            title: `Image search for ${arg1}`,
            image: {
		      url: img[ran].url,
         	},
            timestamp: new Date(),
            footer: {
		       text: `Requested by ${msg.author.username}`,
		       icon_url: msg.author.avatarURL,
	        }
       };*/
        msg.channel.send({embed: {
            color: color,
            title: `Image search for ${arg1}`,
            image: {
		      url: img[ran].url,
         	},
            timestamp: new Date(),
            footer: {
		       text: `Requested by ${msg.author.username}`,
		       icon_url: msg.author.avatarURL,
	        }
            }
			});
     }
  });  
}
