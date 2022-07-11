import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BoardHeader from "./BoardHeader";
import ListContainer from "./ListContainer";
import * as actions from "../../actions/BoardActions";
import { getBoardById } from "../../selectors/boardSelectors";
import { useParams } from "react-router";

const Board = () => {
  const { id: boardId } = useParams();
  const stateBoards = useSelector((state) => state.boards);
  const board = getBoardById(stateBoards, boardId);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!boardId) return;
    dispatch(actions.fetchBoard(boardId));
  }, [dispatch, boardId]);

  if (board) {
    return (
      <div>
        <BoardHeader title={board.title} />
        <main>
          <ListContainer boardId={board._id} />
        </main>
      </div>
    );
  } else {
    return null;
  }
};

export default Board;
