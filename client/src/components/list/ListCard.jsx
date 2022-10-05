const ListCard = ({ title, labels, description, _id }) => {
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {labels
            ? labels.map((label, idx) => (
                <div
                  key={idx}
                  className={`card-label ${label} colorblindable`}
                ></div>
              ))
            : null}
          <p>{title}</p>
        </div>
        <div className="card-icons">
          {description ? <i className="description-icon sm-icon"></i> : null}
        </div>
      </div>
    </div>
  );
};

export default ListCard;
