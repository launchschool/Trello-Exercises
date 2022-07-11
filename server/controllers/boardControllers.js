const Board = require("../models/board");
const List = require("../models/list");
const Card = require("../models/card");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const getBoards = (req, res) => {
  Board.find({}, "title _id createdAt updatedAt")
    .then((boards) => res.json(boards))
    .catch((err) => next(err));
};

const createBoard = (req, res, next) => {
  console.log(req);
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body)
      .then((board) => {
        Board.find({ _id: board._id }, "title _id createdAt updatedAt").then(
          (board) => res.json(board)
        );
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const getBoard = (req, res, next) => {
  const boardId = req.params.id;
  Board.findById(boardId)
    .populate({ path: "lists", populate: { path: "cards" } })
    .then((board) => {
      if (!board) {
        throw new Error("Board doesn't exist");
      }
      res.json(board);
    })
    .catch((err) => next(err));
};

const findBoard = (req, res, next) => {
  const { boardId } = req.body;
  Board.findById(boardId).then((board) => {
    if (!board) {
      throw new Error("Board doesn't exist");
    }
    req.board = board;
    next();
  });
};

const addListToBoard = (req, res, next) => {
  const list = req.list;
  const boardId = req.board._id;
  Board.findByIdAndUpdate(boardId, {
    $addToSet: { lists: list._id }, // adds list to the lists array in board
  }).then(() => {
    next();
  });
};

exports.getBoards = getBoards;
exports.createBoard = createBoard;
exports.getBoard = getBoard;
exports.findBoard = findBoard;
exports.addListToBoard = addListToBoard;
