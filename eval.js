exports.run = (msg,Discord,client,color) => {
  client.fetchApplication()
   .then(p => {
  if(msg.author.id==p.owner.id){
    const arrrrg = msg.content.split(" ").slice(1);
    const chk=msg.content.split('.');
    function clean(text) {
      if (typeof(text) === "string")
          return text
                 .replace(/`/g, "`" + String.fromCharCode(8203))
                 .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }
      let eevv=new Discord.RichEmbed()
      try {
        const code = arrrrg.join(" ");
        let rest,mvm=eval(code);
          msg.react('✅');
              eevv.setColor(`#00ff56`)
              rest = require("util").inspect(mvm);
              eevv.addField('Output',`\`\`\`xl\n${clean(rest)}\`\`\``);
           eevv.addField('Type of code',`\`\`\`xl\n${typeof mvm}\`\`\``);
           msg.channel.send(eevv);
       } catch (err) {
           msg.react('⚠');
           msg.channel.send(`\`\`\`xl\n${clean(err)}\n\`\`\``);
      }
    }
  }).catch(console.log);
};
