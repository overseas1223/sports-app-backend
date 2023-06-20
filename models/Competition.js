const mongoose = require("mongoose")
const { sport } = require('../utils/enum')

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
  teamCount: {
    type: Number,
    required: true
  },
  knockout: {

  },
  group: {
    count: {
      type: Number
    },
    teamCount: {
      type: Number
    }
  },
  tournament: {
    teamCount: {
      type: Number
    }
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