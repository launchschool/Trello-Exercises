import React from "react";

import ListCard from "./ListCard";

const ListCards = ({ cards }) => {
  return (
    <div id="cards-container" data-id="list-1-cards">
      {cards.map((card) => {
        return <ListCard key={card._id} {...card} />;
      })}
    </div>
  );
};

export default ListCards;
