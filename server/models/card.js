const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const CardSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "The Card title is required"]
    },
    listId: {
      type: ObjectId,
      ref: "List"
    },
    boardId: {
      type: ObjectId,
      ref: "Board"
    },
    dueDate: {
      type: Date
    },
    labels: [
      {
        type: String
      }
    ],
    position: {
      type: Number
    },
    description: {
      type: String,
      maxlength: 20000
    },
    archived: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;
