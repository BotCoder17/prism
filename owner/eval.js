exports.run = (msg,client,Discord,color,ownerID) => {
    if(msg.author.id==ownerID){
       const arrrrg = msg.content.split(" ").slice(1);
       const chk=msg.content.split('.');
       function clean(text) {
          if (typeof(text) === "string")
             return text
                 .replace(/`/g, "`" + String.fromCharCode(8203))
                 .replace(/@/g, "@" + String.fromCharCode(8203));
          else return text;
       }
       try {
         const code = arrrrg.join(" ");
         let rest,mvm=eval(code);
          if(typeof mvm!='undefined'){
             let eevv=new Discord.RichEmbed()
                 .setColor(color)
                  rest = require("util").inspect(mvm);
                  eevv.addField('Output',`\`\`\`xl\n${clean(rest)}\`\`\``)
                  .addField('Type',`\`\`\`xl\n${typeof mvm}\`\`\``);
              msg.channel.send(eevv);
         }
       } catch (err) {
            msg.channel.send(`\`\`\`xl\n${clean(err)}\n\`\`\``);
       }
    }
}
