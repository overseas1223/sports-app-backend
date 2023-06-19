const mongoose = require("mongoose")
const { sport, stage } = require('../utils/enum')

const CompetitionSchema = new mongoose.Schema({
  name: {
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
  stage: {
    type: String,
    enum: [
      stage.GROUP,
      stage.GROUP_KNOCKOUT,
      stage.KNOCKOUT
    ],
    required: true
  },
  groupCount: {
    type: Number
  },
  teamCount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
    select: false
  },
  __v: { type: Number, select: false },
})

const Competition = mongoose.model("Competition", CompetitionSchema)
module.exports = Competition