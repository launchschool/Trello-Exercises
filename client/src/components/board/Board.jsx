import React, { useEffect, useReducer } from "react";
import BoardHeader from "./BoardHeader";
import ListContainer from "./ListContainer";
import { useParams } from "react-router";
import API from "../../lib/ApiClient";
import { normalizeData } from "../../utils/helpers";

const reducer = (state = initialState, action) => {
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
    default: {
      return state;
    }
  }
};

const initialState = {
  boards: [],
  lists: [],
  cards: [],
};

const Board = () => {
  const { id: boardId } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);

  const board = state.boards.find((board) => board._id === boardId);

  const boardLists = state.lists.filter((list) => list.boardId === boardId);

  useEffect(() => {
    (async () => {
      const board = await API.getBoard(boardId);
      dispatch({ type: "GET_BOARD", board });
    })();
  }, [boardId]);

  if (board) {
    return (
      <div>
        <BoardHeader title={board.title} />
        <main>
          <ListContainer
            lists={boardLists}
            cards={state.cards}
            boardId={boardId}
          />
        </main>
      </div>
    );
  } else {
    return null;
  }
};

export default Board;
