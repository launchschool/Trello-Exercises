const ToggleableAddCard = ({ isOpenAddCard, setIsOpenAddCard }) => {
  const cardClass = ["add-dropdown", "add-bottom"];
  if (isOpenAddCard) {
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
        <i className="x-icon icon" onClick={() => setIsOpenAddCard(false)}></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
      <div
        className="add-card-toggle"
        data-position="bottom"
        onClick={() => {
          setIsOpenAddCard(true);
        }}
      >
        Add a card...
      </div>
    </>
  );
};

export default ToggleableAddCard;
