const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { ObjectId } = Schema.Types;

const BoardSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "The Board title is required"]
  },
  lists: [
    {
      type: ObjectId,
      ref: "List"
    }
  ],
},
  { timestamps: true }
);

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;