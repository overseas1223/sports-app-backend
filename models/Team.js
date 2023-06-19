const mongoose = require("mongoose")
const { sportsType } = require('../utils/enum')

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  sportsType: {
    type: String,
    enum: [
      sportsType.HURLING, 
      sportsType.GAELIC_FOOTBALL, 
      sportsType.CAMOGIE,
      sportsType.LADIES_GAELIC_FOOTBALL
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