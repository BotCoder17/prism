exports.run = (client,Discord,pf) => {
  client.user.setPresence({
      game: {
          name: `the sun`,
          type: 'WATCHING'
      },
      status: 'online'
  });
}
