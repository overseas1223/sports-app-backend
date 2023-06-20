const mongoose = require("mongoose")

const MatchSchema = new mongoose.Schema({
  matchDay: {
    type: Number
  },
  matchDate: {
    type: Date,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  homeTeam: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Team',
    required: true
  },
  awayTeam: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Team',
    required: true
  },
  neutralVenue: {
    type: Boolean
  },
  referee: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Referee',
    required: true
  },
  normalTime: {
    home: {
      goal: {
        type: Number
      },
      point: {
        type: Number
      }
    },
    away: {
      goal: {
        type: Number
      },
      point: {
        type: Number
      }
    }
  },
  extraTime: {
    status: {
      type: Boolean,
    },
    home: {
      goal: {
        type: Number
      },
      point: {
        type: Number
      }
    },
    away: {
      goal: {
        type: Number
      },
      point: {
        type: Number
      }
    }
  },
  penalty: {
    status: {
      type: Boolean
    },
    home: {
      goal: {
        type: Number
      }
    },
    away: {
      goal: {
        type: Number
      }
    }
  },
  createdAt: {
    type: Date,
    default: new Date(),
    select: false
  },
  __v: { type: Number, select: false },
})

const Match = mongoose.model("Match", MatchSchema)
module.exports = Match