exports.run = (msg,client,Discord,cmd,arg1) => {
    const {c, cpp, node, python, java} = require('compile-run');
    const sourcecode = arg1;
    switch(cmd){
        case 'c':
           let v = c.runSource(sourcecode);
           v.then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for C code successful')
                   .addField('Output',`\`\`\` ${res.stdout} \`\`\``)
                   .setColor('#32CD32')
                   msg.channel.send(em)
                }else if(res.stderr!=''){  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for C code unsuccessful')
                   .addField('Error',`\`\`\` ${res.stderr} \`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setColor('#ff0000')
                   msg.channel.send(em)
                }else if(res.exitCode==null){
                   msg.channel.send(`\`\`\`Can't take input from user\`\`\``);
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
        case 'cpp':
           let w = cpp.runSource(sourcecode);
           w.then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for C++ code successful')
                   .addField('Output',`\`\`\` ${res.stdout} \`\`\``)
                   .setColor('#32CD32')
                   msg.channel.send(em)
                }else if(res.stderr!=''){  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for C++ code unsuccessful')
                   .addField('Error',`\`\`\` ${res.stderr} \`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setColor('#ff0000')
                   msg.channel.send(em)
                }else if(res.exitCode==null){
                   msg.channel.send(`\`\`\`Can't take input from user\`\`\``);
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
        case 'node':case 'js':
           let x = node.runSource(sourcecode);
           x.then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Node/JS code successful')
                   .addField('Output',`\`\`\` \n${res.stdout} \`\`\``)
                   .setColor('#32CD32')
                   msg.channel.send(em)
                }else if(res.stderr!=''){  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Node/JS code unsuccessful')
                   .addField('Error',`\`\`\` ${res.stderr} \`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setColor('#ff0000')
                   msg.channel.send(em)
                }else if(res.exitCode==null){
                   msg.channel.send(`\`\`\`Can't take input from user\`\`\``);
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
        case 'python':
           let y = python.runSource(sourcecode);
           y.then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Python code successful')
                   .addField('Output',`\`\`\` ${res.stdout} \`\`\``)
                   .setColor('#32CD32')
                   msg.channel.send(em)
                }else if(res.stderr!=''){  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Python code unsuccessful')
                   .addField('Error',`\`\`\` ${res.stderr} \`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setColor('#ff0000')
                   msg.channel.send(em)
                }else if(res.exitCode==null){
                   msg.channel.send(`\`\`\`Can't take input from user\`\`\``);
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
        case 'java':
           let z = java.runSource(sourcecode);
           z.then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Java code successful')
                   .addField('Output',`\`\`\` ${res.stdout} \`\`\``)
                   .setColor('#32CD32')
                   msg.channel.send(em)
                }else if(res.stderr!=''){  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Java code unsuccessful')
                   .addField('Error',`\`\`\` ${res.stderr} \`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setColor('#ff0000')
                   msg.channel.send(em)
                }else if(res.exitCode==null){
                   msg.channel.send(`\`\`\`Can't take input from user\`\`\``);
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
    }
}
