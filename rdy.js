exports.run = (client,Discord,pf) => {
  client.user.setPresence({
      game: {
          name: `:) | ${pf}ping`,
          type: 'PLAYING'
      },
      status: 'online'
  });
}
