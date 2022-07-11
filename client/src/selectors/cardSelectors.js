export function listCards(stateCards, listId) {
  return stateCards.filter(
    (card) => !card.archived && card.listId === listId
  );

}