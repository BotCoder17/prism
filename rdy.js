exports.run = (client, Discord, pf) => {
  client.user.setPresence({
    game: {
      name: `Ping! Pong! Mention me 🌟`,
      type: "STREAMING"
    },
    status: "online"
  });
};
