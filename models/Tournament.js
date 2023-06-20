const mongoose = require("mongoose")

const TournamentSchema = new mongoose.Schema({
  rounds: [{
    _id: false,
    matches: [{
      team1: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Team'
      },
      team2: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Team'
      },
      result: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Match'
      }
    }]
  }],
  createdAt: {
    type: Date,
    default: new Date(),
    select: false
  },
  __v: { type: Number, select: false },
})

const Tournament = mongoose.model("Tournament", TournamentSchema)
module.exports = Tournament