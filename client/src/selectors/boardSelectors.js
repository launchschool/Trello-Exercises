export function getBoardById(stateBoards, id) {
  return stateBoards.find((board) => board._id === id);
}
