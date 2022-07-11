const express = require("express");
const router = express.Router();
const boardControllers = require("../controllers/boardControllers");
const listControllers = require("../controllers/listControllers");
const cardControllers = require("../controllers/cardControllers");

router.get("/boards/:id", boardControllers.getBoard);

router.post(
  "/cards",
  listControllers.findList,
  cardControllers.createCard,
  listControllers.addCardToList,
  cardControllers.updateCard,
  cardControllers.sendCard
);

router.put("/cards/:id", cardControllers.updateCard, cardControllers.sendCard);

router.get("/cards/:id", cardControllers.findCard, cardControllers.sendCard);

module.exports = router;
