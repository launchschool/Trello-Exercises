export const normalizeData = (board) => {
  const { lists, ...boardWithoutLists } = board;
  let boardCards = [];
  const listsWithoutCards = lists.map((list) => {
    const { cards, ...listWithoutCards } = list;
    boardCards = boardCards.concat(cards);
    return listWithoutCards;
  });
  return {
    board: boardWithoutLists,
    lists: listsWithoutCards,
    cards: boardCards,
  };
};
