const ToggleableAddCard = () => {
  return (
    <>
      <div className="add-dropdown add-bottom">
        <div className="card">
          <div className="card-info"></div>
          <textarea name="add-card"></textarea>
          <div className="members"></div>
        </div>
        <a href="/#" className="button">
          Add
        </a>
        <i className="x-icon icon"></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
      <div className="add-card-toggle" data-position="bottom">
        Add a card...
      </div>
    </>
  );
};

export default ToggleableAddCard;
