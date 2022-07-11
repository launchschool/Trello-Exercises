import React from "react";
import { useSelector } from "react-redux";
import ListCard from "./ListCard";
import { listCards } from "../../selectors/cardSelectors";

const ListCards = ({listId}) => {
  const stateCards = useSelector((state) => state.cards);
  const cards = listCards(stateCards, listId);
  return (
    <div id="cards-container" data-id="list-1-cards">
      {cards.map((card) => {
        return <ListCard key={card._id} {...card} />;
      })}
    </div>
  )
}

export default ListCards;