exports.run = (msg,arg1) => {
   msg.channel.send(arg1)
  .then(() => {
     msg.delete(1);
  }).catch(console.log);
}
