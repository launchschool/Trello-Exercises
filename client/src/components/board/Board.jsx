import React, { useEffect } from "react";
import BoardHeader from "./BoardHeader";
import ListContainer from "./ListContainer";
import { useParams } from "react-router";
import API from "../../lib/ApiClient";
const Board = ({ state, dispatch }) => {
  const { id: boardId } = useParams();
  const board = state.boards.find((board) => board._id === boardId);

  const boardLists = state.lists.filter((list) => list.boardId === boardId);

  useEffect(() => {
    (async () => {
      const board = await API.getBoard(boardId);
      dispatch({ type: "GET_BOARD", board });
    })();
  }, [boardId, dispatch]);

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
