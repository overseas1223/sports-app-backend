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
  teams: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Team',
    required: true
  }],
  groups: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Group'
  }],
  tournament: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Tournament'
  },
  createdAt: {
    type: Date,
    default: new Date(),
    select: false
  },
  __v: { type: Number, select: false },
})

const Season = mongoose.model("Season", SeasonSchema)
module.exports = Season