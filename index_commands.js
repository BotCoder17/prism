exports.run = (msg,client,Discord,pf,color,arg0,arg01,arg1,cmd,pf2,ownerID,gif_api) => {
  if(pf2.toLowerCase()!=pf.toLowerCase()) {
      let btin=require('./btinfo.js');  // bot info
      btin.run(msg,client,Discord,color,pf,arg0);
  }
/*****************/
 else if(pf2.toLowerCase()==pf.toLowerCase()){
    let react=require('./react/reaction.js');
    react.run(msg,Discord,client,color,cmd,arg01);
    let memes=require('./lolmemes/memes.js');
    memes.run(msg,client,Discord,cmd,color,arg1);
    let cmpl=require('./compiler/compile.js');
    cmpl.run(msg,Discord,cmd,arg1);
    switch(cmd){
        case 'ping':
            let ping=require('./utility/ping.js');
            ping.run(Discord,client,msg);
        break;
        case 'rps':
            let rps=require('./games/rps.js');
            rps.run(msg,client,Discord,color,arg1);
        break;
        case 'stat':case 'stats':case 'statistic':case 'statistics':
            let stat=require('./owner/statistics.js');
            stat.run(msg,client,Discord,color,ownerID);
        break;
        case 'xkcd':case 'xd':
           let xkcds=require('./fun/xkcd.js');
           xkcds.run(msg,client,Discord,color);
        break;
        case 'searchgif':case 'sgif':case 'gifsearch':
           let giff=require('./search/sgif.js');
           giff.run(msg,client,Discord,color,arg1,gif_api);
        break;
        case 'joke':case 'jokes':
           let jks=require('./fun/dadjokes.js');
           jks.run(msg,client,Discord,color);
        break;
        case 'yt':case 'youtube':
           let yts=require('./search/ytsearch.js');
           yts.run(msg,client,Discord,arg1);
        break;
        case 'help':
            let help=require('./help.js');
            help.run(msg,client,Discord,cmd,color,arg1);
        break;
        case 'img':case 'image':
            let img=require('./search/image.js');
            img.run(msg,client,Discord,color,arg1);
        break;
        case 'horoscope':case 'horc':case 'hrc':
            let hrc=require('./general/horosc.js');
            hrc.run(msg,client,Discord,color,arg1);
        break;
        case 'google':case 'ggl':
            let google=require('./search/google.js');
            google.run(msg,Discord,client,color,arg1);
        break;
        case 'fact':case 'facts':
            let fcts=require('./fun/fct.js');
            fcts.run(msg,client,Discord,color);
        break;
        case 'trn': case 'translate':
            let trn=require('./general/trn.js');
            trn.run(msg,Discord,client,color,arg1);
        break;
        case 'dict': case 'dictionary':
            let dict=require('./search/gendic.js');
            dict.run(msg,client,Discord,color,arg1,pf);
        break;
        case 'wiki':case 'wikipedia':
            let wik=require('./search/wiki.js');
            wik.run(msg,client,Discord,color,arg1);
        break;
        case 'ev': case 'eval':
            let eval=require('./owner/eval.js');
            eval.run(msg,client,Discord,color,ownerID);
        break;
        case 'emoji':
            let emoji=require('./utility/emoji.js');
            emoji.run(msg,Discord,client,arg1);
        break;
        case 'weather':
            let weather=require('./search/temp.js');
            weather.run(msg,client,color,Discord,arg1);
        break;
        case 'say':
            let say=require('./utility/say.js');
            say.run(msg,arg1);
        break;
        case 'ub': case 'urban':
            let urban=require('./search/urban.js');
            urban.run(msg,Discord,client,color,arg1);
        break;
        case 'res':case 'restart':
            let rb=require('./owner/restart.js');
            rb.run(msg,client,Discord,color,pf,ownerID);
        break;
        case 'ava':case 'avatar':
            let ava=require('./utility/ava.js');
            ava.run(msg,client,Discord,color,arg01);
        break;
        case 'whois':case 'userinfo':
            let whois=require('./utility/userinfo.js');
            whois.run(msg,client,Discord,color,arg01);
        break;
        case 'serverinfo':case 'whatis':
            let serv=require('./utility/serverinfo.js');
            serv.run(msg,client,Discord,color);
        break;
        case '8ball':case '8b':
            let eball=require('./fun/eball.js');
            eball.run(msg,client,Discord,color,arg1);
        break;
    }
  }else {return;}
     console.log(`arg0 => ${arg0}\narg1 => ${arg1}\ncmd => ${cmd}\npf2 => ${pf2}\narg01 => ${arg01}\ncommands_and_prefix => ${commands_and_prefix}\nmentions => ${mentions}\nmg => ${mg}`);
   }
