const mongoose = require("mongoose")

const RefereeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
    select: false
  },
  __v: { type: Number, select: false },
})

const Referee = mongoose.model("Referee", RefereeSchema)
module.exports = Referee