const mongoose = require("mongoose")
const { sport, stage } = require('../utils/enum')

const MatchSchema = new mongoose.Schema({
  
  createdAt: {
    type: Date,
    default: new Date(),
    select: false
  },
  __v: { type: Number, select: false },
})

const Match = mongoose.model("Match", MatchSchema)
module.exports = Match