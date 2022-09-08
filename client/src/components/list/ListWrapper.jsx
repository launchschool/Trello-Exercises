import ListCards from "./ListCards";
import ToggleableAddCard from "./ToggleableAddCard";

const ListWrapper = ({ title, _id, cards }) => {
  const listCards = cards.filter((card) => card.listId === _id);
  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <div>
            <p className="list-title">{title}</p>
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a href="/#" className="button">
              Add
            </a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <ListCards cards={listCards} />
          <ToggleableAddCard listId={_id} />
        </div>
      </div>
    </div>
  );
};

export default ListWrapper;
