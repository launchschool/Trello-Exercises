import React from "react";
import ListWrapper from "../list/ListWrapper";
import { useSelector } from "react-redux";
import { boardListsSelector } from "../../selectors/listSelectors";

const ExistingLists = (props) => {
  const stateLists = useSelector((state) => state.lists);
  const lists = boardListsSelector(stateLists, props.boardId);
  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((list) => (
        <ListWrapper
          key={list._id}
          {...list}
        />
      ))}
    </div>
  );
}

export default ExistingLists;