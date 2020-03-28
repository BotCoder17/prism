exports.run = (msg, client, Discord, cmd, color, arg1) => {
  let help = require("./help.json");
  let rct = "",
    utl = "",
    sr = "",
    trn = "",
    fn = "",
    mem = "",
    cmp = "",
    gms = "";
  for (var i = 0; i < help.react.length; i++) {
    rct +=
      i < help.react.length - 1
        ? `\`${help.react[i]}\`  |  `
        : `\`${help.react[i]}\``;
  }
  for (var i = 0; i < help.compl.length; i++) {
    cmp +=
      i < help.compl.length - 1
        ? `\`${help.compl[i]}\`  |  `
        : `\`${help.compl[i]}\``;
  }
  for (var i = 0; i < help.utility.length; i++) {
    utl +=
      i < help.utility.length - 1
        ? `\`${help.utility[i]}\`  |  `
        : `\`${help.utility[i]}\``;
  }
  for (var i = 0; i < help.search.length; i++) {
    sr +=
      i < help.search.length - 1
        ? `\`${help.search[i]}\`  |  `
        : `\`${help.search[i]}\``;
  }
  for (var i = 0; i < help.general.length; i++) {
    trn +=
      i < help.general.length - 1
        ? `\`${help.general[i]}\`  |  `
        : `\`${help.general[i]}\``;
  }
  for (var i = 0; i < help.fun.length; i++) {
    fn +=
      i < help.fun.length - 1
        ? `\`${help.fun[i]}\`  |  `
        : `\`${help.fun[i]}\``;
  }
  for (var i = 0; i < help.memes.length; i++) {
    mem +=
      i < help.memes.length - 1
        ? `\`${help.memes[i]}\`  |  `
        : `\`${help.memes[i]}\``;
  }
  for (var i = 0; i < help.games.length; i++) {
    gms +=
      i < help.games.length - 1
        ? `\`${help.games[i]}\`  |  `
        : `\`${help.games[i]}\``;
  }
  let em = new Discord.RichEmbed()
    .setTitle("Help Box")
    .addField("General", trn)
    .addField("Compile codes", cmp)
    .addField("React", rct)
    .addField("Games", gms)
    .addField("Search stuffs", sr)
    .addField("Fun", fn)
    .addField("Memes", mem)
    .addField("Utility", utl)
    .setColor(color)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp(new Date())
    .setFooter(`Requested by ${msg.author.username}`, msg.author.avatarURL);

  msg.channel.send(em);
};
