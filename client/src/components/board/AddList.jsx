const AddList = () => {
  return (
    <div id="new-list" className="new-list">
      <span>Add a list...</span>
      <input type="text" placeholder="Add a list..." name="title" />
      <div>
        <input type="submit" className="button" value="Save" />
        <i type="button" className="x-icon icon"></i>
      </div>
    </div>
  );
};

export default AddList;
