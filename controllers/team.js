const Team = require('../models/Team')

const AddTeam = async (req, res) => {
  try {
    const newTeam = new Team(req.body)
    const team = await newTeam.save()

    return res.status(200).json({
      status: 'success',
      data: { team: team }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { AddTeam }