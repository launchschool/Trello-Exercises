const cards = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const lists = action.board.lists;
      const boardId = action.board._id;
      let cards = [];
      lists.forEach(list => (cards = cards.concat(list.cards)));
      const filteredState = state.filter(card => {
        return card.boardId !== boardId;
      });
      cards = cards.map(card => {
        const existingVersion = state.find(
          stateCard => card._id === stateCard._id
        );
        if (existingVersion) {
          return { ...existingVersion, ...card };
        } else {
          return card;
        }
      });
      return filteredState.concat(cards);
    default:
      return state;
  }
};

export default cards;
