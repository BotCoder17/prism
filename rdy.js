exports.run = (client,Discord,pf) => {
  client.user.setPresence({
      game: {
          name: `with sunlight`,
          type: 'PLAYING'
      },
      status: 'online'
  });
}
