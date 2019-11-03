exports.run = (msg,client,Discord,cmd,arg1) => {
    const {c, cpp, node, python, java} = require('compile-run');
    const sourcecode = arg1;
    switch(cmd){
        case 'c':
           let resultPromise = c.runSource(sourcecode);
           resultPromise
             .then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for C code successful')
                   .addField('Output',`\`\`\`${res.stdout}\`\`\``)
                   .addField('Exit code',res.exitCode)
                   .setTimestamp(new Date())
                   .setColor('#0f0')
                   msg.channel.send(em)
                }else{  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for C code unsuccessful')
                   .addField('Error',`\`\`\`${res.stderr}\`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setTimestamp(new Date())
                   .setColor('#f00')
                   msg.channel.send(em)
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
        case 'cpp':
           let resultPromise = cpp.runSource(sourcecode);
           resultPromise
             .then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for C++ code successful')
                   .addField('Output',`\`\`\`${res.stdout}\`\`\``)
                   .addField('Exit code',res.exitCode)
                   .setTimestamp(new Date())
                   .setColor('#0f0')
                   msg.channel.send(em)
                }else{  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for C++ code unsuccessful')
                   .addField('Error',`\`\`\`${res.stderr}\`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setTimestamp(new Date())
                   .setColor('#f00')
                   msg.channel.send(em)
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
        case 'node':case 'js':
           let resultPromise = node.runSource(sourcecode);
           resultPromise
             .then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Node/JS code successful')
                   .addField('Output',`\`\`\`${res.stdout}\`\`\``)
                   .addField('Exit code',res.exitCode)
                   .setTimestamp(new Date())
                   .setColor('#0f0')
                   msg.channel.send(em)
                }else{  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Node/JS code unsuccessful')
                   .addField('Error',`\`\`\`${res.stderr}\`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setTimestamp(new Date())
                   .setColor('#f00')
                   msg.channel.send(em)
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
        case 'python':
           let resultPromise = python.runSource(sourcecode);
           resultPromise
             .then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Python code successful')
                   .addField('Output',`\`\`\`${res.stdout}\`\`\``)
                   .addField('Exit code',res.exitCode)
                   .setTimestamp(new Date())
                   .setColor('#0f0')
                   msg.channel.send(em)
                }else{  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Python code unsuccessful')
                   .addField('Error',`\`\`\`${res.stderr}\`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setTimestamp(new Date())
                   .setColor('#f00')
                   msg.channel.send(em)
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
        case 'java':
           let resultPromise = java.runSource(sourcecode);
           resultPromise
             .then(res => {
                if(res.stderr==''){    //no error
                   let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Java code successful')
                   .addField('Output',`\`\`\`${res.stdout}\`\`\``)
                   .addField('Exit code',res.exitCode)
                   .setTimestamp(new Date())
                   .setColor('#0f0')
                   msg.channel.send(em)
                }else{  // if any error
                    let em=new Discord.RichEmbed()
                   .setTitle('Compilation for Java code unsuccessful')
                   .addField('Error',`\`\`\`${res.stderr}\`\`\``)
                   .addField('Type of error',res.errorType,true)
                   .addField('Exit code',res.exitCode,true)
                   .setTimestamp(new Date())
                   .setColor('#f00')
                   msg.channel.send(em)
                }
             })
            .catch(err => {
                console.log(err);
             });
        break;
    }
}
