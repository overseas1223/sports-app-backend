const mongoose = require("mongoose")
const { sport } = require('../utils/enum')

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  sport: {
    type: String,
    enum: [
      sport.HURLING, 
      sport.GAELIC_FOOTBALL, 
      sport.CAMOGIE,
      sport.LADIES_GAELIC_FOOTBALL
    ],
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
    select: false,
  },
  __v: { type: Number, select: false },
});

const Team = mongoose.model("Team", TeamSchema)
module.exports = Team