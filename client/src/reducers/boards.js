export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS":
      return action.boards;
    case "CREATE_BOARD_SUCCESS":
      const newBoard = action.board;
      return state.concat(newBoard);
    case "FETCH_BOARD_SUCCESS":
      const excludedBoards = state.filter(
        board => board._id !== action.board._id
      );
      const { lists, ...newBoardWithoutLists } = action.board;

      return excludedBoards.concat(newBoardWithoutLists);
    default:
      return state;
  }
}
