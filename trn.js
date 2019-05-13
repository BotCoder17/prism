exports.run = (msg,Discord,client,color,arg1) => {
    var translate = require('node-google-translate-skidz');
    let nonne=arg1.split(' ');
     let skd=nonne[0];
     let typ=skd.split('->');
     let src=typ[0].trim().toLowerCase(); // source
     let trg=typ[1].trim().toLowerCase(); // target
     let sdf=nonne.splice(1),res='';
     for(var i=0;i<sdf.length;i++){
         if(sdf[i]!=','){
            res+=sdf[i]+' '; // text
         }
     }
  /*****/
  let fst='',sec='';res.trim();
  translate({
     text: res,
     source: src,
     target: trg
  }, function(re) {
       let lg=new Discord.RichEmbed()
       try{
          lg.setTitle(`${client.user.username} translate`)
          .setThumbnail(client.user.avatarURL)
          .addField(fst,`\`\`\`${res}\`\`\``) //text in original language
          .addField(sec,`\`\`\`${re.sentences[0].trans}\`\`\``) //translated one
          .setTimestamp(new Date())
          .setFooter(`Requested by ${msg.author.username}`,msg.author.avatarURL)
          .setColor(color);
           msg.channel.send(lg);
         }catch(err){
         msg.channel.send(`What u wanna translate??`);
       }
  });
switch(src){ //source
   case 'af':
     fst='Afrikaans';
   break;
   case 'sq':
     fst='Albanian';
   break;
   case 'am':
     fst='Amharic';
   break;
   case 'ar':
     fst='Arabic';
   break;
   case 'hy':
     fst='Armenian';
   break;
   case 'az':
     fst='Azerbaijani';
   break;
   case 'eu':
     fst='Basque';
   break;
   case 'be':
     fst='Belarusian';
   break;
   case 'bn':
     fst='Bengali';
   break;
   case 'bs':
     fst='Bosnian';
   break;
   case 'bg':
     fst='Bulgarian';
   break;
   case 'ca':
     fst='Catalan';
   break;
   case 'ceb':
     fst='Cebuano';
   break;
   case 'ny':
     fst='Chichewa';
   break;
   case 'zh-cn':
     fst='Chinese Simplified';
   break;
   case 'zh-tw':
     fst='Chinese Traditional';
   break;
   case 'co':
     fst='Corsican';
   break;
   case 'hr':
     fst='Croatian';
   break;
   case 'cs':
     fst='Czech';
   break;
   case 'da':
     fst='Danish';
   break;
   case 'nl':
     fst='Dutch';
   break;
   case 'en':
     fst='English';
   break;
   case 'eo':
     fst='Esperanto';
   break;
   case 'et':
     fst='Estonian';
   break;
   case 'tl':
     fst='Filipino';
   break;
   case 'fi':
     fst='Finnish';
   break;
   case 'fr':
     fst='French';
   break;
   case 'fy':
     fst='Frisian';
   break;
   case 'gl':
     fst='Galician';
   break;
   case 'ka':
     fst='Georgian';
   break;
   case 'de':
     fst='German';
   break;
   case 'el':
     fst='Greek';
   break;
   case 'gu':
     fst='Gujarati';
   break;
   case 'ht':
     fst='Haitian Creole';
   break;
   case 'ha':
     fst='Hausa';
   break;
   case 'haw':
     fst='Hawaiian';
   break;
   case 'iw':
     fst='Hebrew';
   break;
   case 'hi':
     fst='Hindi';
   break;
   case 'hmn':
     fst='Hmong';
   break;
   case 'hu':
     fst='Hungarian';
   break;
   case 'is':
     fst='Icelandic';
   break;
   case 'ig':
     fst='Igbo';
   break;
   case 'id':
     fst='Indonesian';
   break;
   case 'ga':
     fst='Irish';
   break;
   case 'it':
     fst='Italian';
   break;
   case 'ja':
     fst='Japanese';
   break;
   case 'jw':
     fst='Javanese';
   break;
   case 'kn':
     fst='Kannada';
   break;
   case 'kk':
     fst='Kazakh';
   break;
   case 'km':
     fst='Khmer';
   break;
   case 'ko':
     fst='Korean';
   break;
   case 'ky':
     fst='Kyrgyz';
   break;
   case 'lo':
     fst='Lao';
   break;
   case 'la':
     fst='Latin';
   break;
   case 'lv':
     fst='Latvian';
   break;
   case 'lt':
     fst='Lithuanian';
   break;
   case 'lb':
     fst='Luxembourgish';
   break;
   case 'mk':
     fst='Macedonian';
   break;
   case 'mg':
     fst='Malagasy';
   break;
   case 'ms':
     fst='Malay';
   break;
   case 'ml':
     fst='Malayalam';
   break;
   case 'mt':
     fst='Maltese';
   break;
   case 'mi':
     fst='Maori';
   break;
   case 'mr':
     fst='Marathi';
   break;
   case 'mn':
     fst='Mongolian';
   break;
   case 'my':
     fst='Myanmar (Burmese)';
   break;
   case 'no':
     fst='Norwegian';
   break;
   case 'ps':
     fst='Pashto';
   break;
   case 'fa':
     fst='Persian';
   break;
   case 'pl':
     fst='Polish';
   break;
   case 'pt':
     fst='Portuguese';
   break;
   case 'ma':
     fst='Punjabi';
   break;
   case 'ma':
     fst='Punjabi';
   break;
   case 'ro':
     fst='Romanian';
   break;
   case 'ru':
     fst='Russian';
   break;
   case 'sm':
     fst='Samoan';
   break;
   case 'gd':
     fst='Scots Gaelic';
   break;
   case 'sr':
     fst='Serbian';
   break;
   case 'st':
     fst='Sesotho';
   break;
   case 'sn':
     fst='Shona';
   break;
   case 'sd':
     fst='Sindhi';
   break;
   case 'si':
     fst='Sinhala';
   break;
   case 'sk':
     fst='Slovak';
   break;
   case 'sl':
     fst='Slovenian';
   break;
   case 'so':
     fst='Somali';
   break;
   case 'es':
     fst='Spanish';
   break;
   case 'su':
     fst='Sundanese';
   break;
   case 'sw':
     fst='Swahili';
   break;
   case 'sv':
     fst='Swedish';
   break;
   case 'tg':
     fst='Tajik';
   break;
   case 'ta':
     fst='Tamil';
   break;
   case 'te':
     fst='Telugu';
   break;
   case 'th':
     fst='Thai';
   break;
   case 'tr':
     fst='Turkish';
   break;
   case 'uk':
     fst='Ukrainian';
   break;
   case 'ur':
     fst='Urdu';
   break;
   case 'uz':
     fst='Uzbek';
   break;
   case 'vi':
     fst='Vietnamese';
   break;
   case 'cy':
     fst='Welsh';
   break;
   case 'xh':
     fst='Xhosa';
   break;
   case 'yi':
     fst='Yiddish';
   break;
   case 'yo':
     fst='Yoruba';
   break;
   case 'zu':
     fst='Zulu';
   break;
}
switch(trg){ //target
   case 'af':
     sec='Afrikaans';
   break;
   case 'sq':
     sec='Albanian';
   break;
   case 'am':
     sec='Amharic';
   break;
   case 'ar':
     sec='Arabic';
   break;
   case 'hy':
     sec='Armenian';
   break;
   case 'az':
     sec='Azerbaijani';
   break;
   case 'eu':
     sec='Basque';
   break;
   case 'be':
     sec='Belarusian';
   break;
   case 'bn':
     sec='Bengali';
   break;
   case 'bs':
     sec='Bosnian';
   break;
   case 'bg':
     sec='Bulgarian';
   break;
   case 'ca':
     sec='Catalan';
   break;
   case 'ceb':
     sec='Cebuano';
   break;
   case 'ny':
     sec='Chichewa';
   break;
   case 'zh-cn':
     sec='Chinese Simplified';
   break;
   case 'zh-tw':
     sec='Chinese Traditional';
   break;
   case 'co':
     sec='Corsican';
   break;
   case 'hr':
     sec='Croatian';
   break;
   case 'cs':
     sec='Czech';
   break;
   case 'da':
     sec='Danish';
   break;
   case 'nl':
     sec='Dutch';
   break;
   case 'en':
     sec='English';
   break;
   case 'eo':
     sec='Esperanto';
   break;
   case 'et':
     sec='Estonian';
   break;
   case 'tl':
     sec='Filipino';
   break;
   case 'fi':
     sec='Finnish';
   break;
   case 'fr':
     sec='French';
   break;
   case 'fy':
     sec='Frisian';
   break;
   case 'gl':
     sec='Galician';
   break;
   case 'ka':
     sec='Georgian';
   break;
   case 'de':
     sec='German';
   break;
   case 'el':
     sec='Greek';
   break;
   case 'gu':
     sec='Gujarati';
   break;
   case 'ht':
     sec='Haitian Creole';
   break;
   case 'ha':
     sec='Hausa';
   break;
   case 'haw':
     sec='Hawaiian';
   break;
   case 'iw':
     sec='Hebrew';
   break;
   case 'hi':
     sec='Hindi';
   break;
   case 'hmn':
     sec='Hmong';
   break;
   case 'hu':
     sec='Hungarian';
   break;
   case 'is':
     sec='Icelandic';
   break;
   case 'ig':
     sec='Igbo';
   break;
   case 'id':
     sec='Indonesian';
   break;
   case 'ga':
     sec='Irish';
   break;
   case 'it':
     sec='Italian';
   break;
   case 'ja':
     sec='Japanese';
   break;
   case 'jw':
     sec='Javanese';
   break;
   case 'kn':
     sec='Kannada';
   break;
   case 'kk':
     sec='Kazakh';
   break;
   case 'km':
     sec='Khmer';
   break;
   case 'ko':
     sec='Korean';
   break;
   case 'ky':
     sec='Kyrgyz';
   break;
   case 'lo':
     sec='Lao';
   break;
   case 'la':
     sec='Latin';
   break;
   case 'lv':
     sec='Latvian';
   break;
   case 'lt':
     sec='Lithuanian';
   break;
   case 'lb':
     sec='Luxembourgish';
   break;
   case 'mk':
     sec='Macedonian';
   break;
   case 'mg':
     sec='Malagasy';
   break;
   case 'ms':
     sec='Malay';
   break;
   case 'ml':
     sec='Malayalam';
   break;
   case 'mt':
     sec='Maltese';
   break;
   case 'mi':
     sec='Maori';
   break;
   case 'mr':
     sec='Marathi';
   break;
   case 'mn':
     sec='Mongolian';
   break;
   case 'my':
     sec='Myanmar (Burmese)';
   break;
   case 'no':
     sec='Norwegian';
   break;
   case 'ps':
     sec='Pashto';
   break;
   case 'fa':
     sec='Persian';
   break;
   case 'pl':
     sec='Polish';
   break;
   case 'pt':
     sec='Portuguese';
   break;
   case 'ma':
     sec='Punjabi';
   break;
   case 'ma':
     sec='Punjabi';
   break;
   case 'ro':
     sec='Romanian';
   break;
   case 'ru':
     sec='Russian';
   break;
   case 'sm':
     sec='Samoan';
   break;
   case 'gd':
     sec='Scots Gaelic';
   break;
   case 'sr':
     sec='Serbian';
   break;
   case 'st':
     sec='Sesotho';
   break;
   case 'sn':
     sec='Shona';
   break;
   case 'sd':
     sec='Sindhi';
   break;
   case 'si':
     sec='Sinhala';
   break;
   case 'sk':
     sec='Slovak';
   break;
   case 'sl':
     sec='Slovenian';
   break;
   case 'so':
     sec='Somali';
   break;
   case 'es':
     sec='Spanish';
   break;
   case 'su':
     sec='Sundanese';
   break;
   case 'sw':
     sec='Swahili';
   break;
   case 'sv':
     sec='Swedish';
   break;
   case 'tg':
     sec='Tajik';
   break;
   case 'ta':
     sec='Tamil';
   break;
   case 'te':
     sec='Telugu';
   break;
   case 'th':
     sec='Thai';
   break;
   case 'tr':
     sec='Turkish';
   break;
   case 'uk':
     sec='Ukrainian';
   break;
   case 'ur':
     sec='Urdu';
   break;
   case 'uz':
     sec='Uzbek';
   break;
   case 'vi':
     sec='Vietnamese';
   break;
   case 'cy':
     sec='Welsh';
   break;
   case 'xh':
     sec='Xhosa';
   break;
   case 'yi':
     sec='Yiddish';
   break;
   case 'yo':
     sec='Yoruba';
   break;
   case 'zu':
     sec='Zulu';
   break;
  }
}
