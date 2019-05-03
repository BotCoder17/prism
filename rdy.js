exports.run = (client,Discord,pf) => {
  client.user.setPresence({
      game: {
          name: `:)`,
          type: 'PLAYING'
      },
      status: 'online'
  });
}
