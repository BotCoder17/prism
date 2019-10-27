exports.run = (client,Discord,pf) => {
  client.user.setPresence({
      game: {
          name: `ping! pong! Mention me 🌟`,
          type: 'PLAYING'
      },
      status: 'online'
  });
}
