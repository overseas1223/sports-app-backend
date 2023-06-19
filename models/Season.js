const mongoose = require("mongoose")

const SeasonSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true
  },
  competition: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Competition',
    required: true
  },
  standings: [{
    team: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Team',
      required: true
    },
    win: {
      type: Number,
      default: 0
    },
    draw: {
      type: Number,
      default: 0
    },
    loss: {
      type: Number,
      default: 0
    },
  }],
  createdAt: {
    type: Date,
    default: new Date(),
    select: false
  },
  __v: { type: Number, select: false },
})

const Season = mongoose.model("Season", SeasonSchema)
module.exports = Season