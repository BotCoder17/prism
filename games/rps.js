exports.run = (msg,client,Discord,color,arg1) => {
     let hmm=arg1.split(' ')
     let a=hmm[0] // rock? papar? scissor?
     let b=hmm[1] // mention
     
     let rpss=["rock","paper","scissor","rock","paper","scissor"
                ,"rock","paper","scissor","rock","paper","scissor"
                ,"rock","paper","scissor","rock","paper","scissor"
                ,"rock","paper","scissor","rock","paper","scissor"
                ,"rock","paper","scissor","rock","paper","scissor"
                ,"rock","paper","scissor","rock","paper","scissor"]
      let rps=rpss[Math.floor(Math.random()*rpss.length)]
      if(b==null||b==''){ //play with bot
         let res="",ps=a.toLowerCase()
         res=((ps=="rock"&&rps=="rock")||(ps=="paper"&&rps=="paper")||(ps=="scissor"&&rps=="scissor"))?"It\'s a draw!":
         ((ps=="rock"&&rps=="scissor")||(ps=="paper"&&rps=="rock")||(ps=="scissor"&&rps=="paper"))?"Congo! u win "+(msg.author.username):
         ((ps=="scissor"&&rps=="rock")||(ps=="rock"&&rps=="paper")||(ps=="paper"&&rps=="scissor"))?(client.user.username)+" wins !":"";
        if(res!=""){
           let pr=new Discord.RichEmbed()
            .setDescription(`**${msg.author.username}** : \`${ps}\`\n**${client.user.username}** : \`${rps}\``)
            .addField("Result",res)
            .setTitle(`Playing rock, paper, scissor with ${msg.author.username}`)
            .setColor(color)
           msg.channel.send(pr)
        }
      }else{ //play with user
        let usr=''
        for(var i=0;i<b.length;i++){
          let c=b.charAt(i)
          if((c>='0'&&c<='9')&&(c!='@')&&(c!='>')&&(c!='<')&&(c!='!')){
              usr+=c
          }
        }
      if(usr.length==18){
        try{
           let res="",ps=a.toLowerCase()
            res=((ps=="rock"&&rps=="rock")||(ps=="paper"&&rps=="paper")||(ps=="scissor"&&rps=="scissor"))?"It\'s a draw!":
           ((ps=="rock"&&rps=="scissor")||(ps=="paper"&&rps=="rock")||(ps=="scissor"&&rps=="paper"))?"Congo! u win "+(msg.author.username):
           ((ps=="scissor"&&rps=="rock")||(ps=="rock"&&rps=="paper")||(ps=="paper"&&rps=="scissor"))?(client.users.get(usr).username)+" wins !":"";
           if(res!=""){
              let pr=new Discord.RichEmbed()
                .setDescription(`**${msg.author.username}** : \`${ps}\`\n**${client.users.get(usr).username}** : \`${rps}\``)
                .addField("Result",res)
                .setTitle(`Playing rock, paper, scissor with ${client.users.get(usr).username}`)
                .setColor(color)
                msg.channel.send(pr)
           }
        }catch(err){}
      }
    }
}
