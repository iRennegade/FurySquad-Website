const { model, Schema } = require("mongoose");
const shortid = require("shortid");

const doxSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false,
    default: "FurySquad"
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false
  },
  views: {
    type: Number,
    required: false,
    default: 0
  },
  id: {
    type: String,
    required: false,
    unique: true,
    default: shortid.generate()
  }
});

module.exports = model("Dox", doxSchema);