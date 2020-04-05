exports.run = (client,Discord,pf) => {
  client.user.setPresence({
      game: {
          name: `It's working!`,
          type: 'PLAYING'
      },
      status: 'online'
  });
}
