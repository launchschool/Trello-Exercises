export function boardListsSelector(stateLists, boardId) {
  return stateLists.filter((list) => list.boardId === boardId);
}
