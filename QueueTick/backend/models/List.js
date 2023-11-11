const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  items: [
    {
      text: { type: String, required: true },
      comment: String,
      completed: Boolean,
    },
  ],
  created_at: { type: Date, default: Date.now },
});

const List = mongoose.model('List', ListSchema);

module.exports = List;
