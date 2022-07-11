import React from "react";
import ListWrapper from "../list/ListWrapper";

const ExistingLists = ({ lists, cards }) => {
  return (
    <div id="existing-lists" className="existing-lists">
      {lists.map((list) => (
        <ListWrapper key={list._id} {...list} cards={cards} />
      ))}
    </div>
  );
};

export default ExistingLists;
