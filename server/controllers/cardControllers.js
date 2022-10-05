const Card = require("../models/card");

const createCard = (req, res, next) => {
  let { title, position } = req.body.card;
  const list = req.list;
  const listId = list._id;
  const boardId = list.boardId;
  return Card.create({
    labels: [],
    dueDate: null,
    title: title,
    description: "",
    listId: listId,
    boardId: boardId,
    archived: false,
    position: position,
  }).then((card) => {
    req.card = card;
    next();
  });
};

const updateCard = (req, res, next) => {
  const cardId = req.params.id;
  const { attrs } = req.body;
  Card.findByIdAndUpdate(
    cardId,
    {
      ...attrs,
    },
    { new: true }
  ).then((card) => {
    req.card = card;
    next();
  });
};

const findCard = (req, res, next) => {
  const cardId = req.params.id || req.body.cardId;
  Card.findById(cardId)
    .populate([
      {
        path: "list",
        populate: {
          path: "board",
        },
      },
    ])
    .then((card) => {
      if (!card) {
        throw new Error("Card doesn't exist");
      }
      req.card = card;
      next();
    });
};

const sendCard = (req, res) => {
  const card = req.card;
  res.json({
    card,
  });
};

exports.createCard = createCard;
exports.updateCard = updateCard;
exports.findCard = findCard;
exports.sendCard = sendCard;
