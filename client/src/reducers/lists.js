const lists = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      const { lists } = action.board;

      let listsWithoutCards = lists.map(list => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
      let filteredLists = state.filter(
        list => list.boardId !== action.board._id
      );
      return filteredLists.concat(listsWithoutCards);
    default:
      return state;
  }
};

export default lists;