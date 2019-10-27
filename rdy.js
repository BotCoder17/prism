exports.run = (client,Discord,pf) => {
  client.user.setPresence({
      game: {
          name: `ping! pong!`,
          type: 'PLAYING'
      },
      status: 'online'
  });
}
