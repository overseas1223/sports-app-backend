const mongoose = require("mongoose")

const GroupSchema = new mongoose.Schema({
  matches: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Match',
  }],
  standings: [{
    _id: false,
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
    scoreFor: {
      goal: {
        type: Number,
        default: 0
      },
      point: {
        type: Number,
        default: 0,
      }
    },
    scoreAgainst: {
      goal: {
        type: Number,
        default: 0
      },
      point: {
        type: Number,
        default: 0,
      }
    },
  }],
  createdAt: {
    type: Date,
    default: new Date(),
    select: false
  },
  __v: { type: Number, select: false },
})

const Group = mongoose.model("Group", GroupSchema)
module.exports = Group