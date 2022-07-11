import React from "react";
import ExistingLists from "./ExistingLists";
import AddList from "./AddList";

const ListContainer = ({ boardId }) => {
  return (
    <div id="list-container" className="list-container">
      <ExistingLists boardId={boardId} />
      <AddList boardId={boardId} />
    </div>
  );
};

export default ListContainer;