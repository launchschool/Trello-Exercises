import { useState } from "react";
import ListCards from "./ListCards";
import ToggleableAddCard from "./ToggleableAddCard";

const ListWrapper = (props) => {
  const [isOpenAddCard, setIsOpenAddCard] = useState(false);
  const classList = isOpenAddCard
    ? "list-wrapper add-dropdown-active"
    : "list-wrapper";
  return (
    <div className={classList}>
      <div className="list-background">
        <div className="list">
          <a href="/#" className="more-icon sm-icon"></a>
          <div>
            <p className="list-title">{props.title}</p>
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
          <ListCards listId={props._id} />
          <ToggleableAddCard
            listId={props._id}
            isOpenAddCard={isOpenAddCard}
            setIsOpenAddCard={setIsOpenAddCard}
          />
        </div>
      </div>
    </div>
  );
};

export default ListWrapper;
