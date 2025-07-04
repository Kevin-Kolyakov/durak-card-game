export const Durak = {
  setup: () => ({
    players: Array(6).fill().map(() => ({ hand: [] })),
    deck: [],
    table: [],
    trump: null,
    attacker: 0,
    defender: 1,
  }),
  moves: {
    playCard(G, ctx, cardIndex) {
      // Custom logic here
    },
  },
};
