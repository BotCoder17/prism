exports.run = (client,Discord,pf) => {
  client.user.setPresence({
      game: {
          name: `oof`,
          type: 'PLAYING'
      },
      status: 'online'
  });
}
