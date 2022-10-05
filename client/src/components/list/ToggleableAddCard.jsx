const ToggleableAddCard = ({ isCardActive, onToggleCardActivation }) => {
  let cardClass = ["add-dropdown", "add-bottom"];

  if (isCardActive) {
    cardClass.push("active-card");
  }
  return (
    <>
      <div className={cardClass.join(" ")}>
        <div className="card">
          <div className="card-info"></div>
          <textarea name="add-card"></textarea>
          <div className="members"></div>
        </div>
        <a href="/#" className="button">
          Add
        </a>
        <i className="x-icon icon" onClick={onToggleCardActivation}></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
      <div
        className="add-card-toggle"
        onClick={onToggleCardActivation}
        data-position="bottom"
      >
        Add a card...
      </div>
    </>
  );
};

export default ToggleableAddCard;
