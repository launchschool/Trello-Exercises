const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const ListSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 100,
      trim: true,
      required: [true, "The List title is required"]
    },
    position: {
      type: Number
    },
    boardId: {
      type: ObjectId,
      ref: "Board"
    },
    cards: [
      {
        type: ObjectId,
        ref: "Card"
      }
    ]
  },
  { timestamps: true }
);

const List = mongoose.model("List", ListSchema);
module.exports = List;
