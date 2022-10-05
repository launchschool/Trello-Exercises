import { normalizeData } from "../utils/helpers";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOARD":
      const boardId = action.board._id;
      const isBoardInState = state.boards.find(
        (board) => board._id === boardId
      );
      const { board, lists, cards } = normalizeData(action.board);
      const listsFromOtherBoards = state.lists.filter(
        (list) => list.boardId !== action.board._id
      );
      const cardsFromOtherBoards = state.cards.filter(
        (card) => card.boardId !== boardId
      );
      return {
        boards: isBoardInState ? state.boards : state.boards.concat(board),
        lists: listsFromOtherBoards.concat(lists),
        cards: cardsFromOtherBoards.concat(cards),
      };
    case "GET_CARD":
      const cardId = action.card._id;
      const cardInState = state.cards.find((c) => c._id === cardId);
      return {
        ...state,
        cards: cardInState
          ? state.cards.map((c) => {
              if (c._id === cardId) {
                return action.card;
              }
              return c;
            })
          : state.cards.concat(action.card),
      };
    default: {
      return state;
    }
  }
};

export const initialState = {
  boards: [],
  lists: [],
  cards: [],
};
