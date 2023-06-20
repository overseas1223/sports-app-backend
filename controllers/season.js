const Group = require('../models/Group')
const Season = require('../models/Season')

const AddSeason = async (req, res) => {
  try {
    const newSeason = new Season(req.body)
    const season = await newSeason.save()

    return res.status(200).json({
      status: 'success',
      data: { season: season }
    })
  } catch (err) {
    console.log(err)
  }
}

const AddTeamsToSeason = async (req, res) => {
  try {
    const { teams } = req.body
    const { seasonId } = req.params
    const season = await Season.findByIdAndUpdate(seasonId, { teams: teams }, { new: true })

    return res.status(200).json({
      status: 'success',
      data: { season: season }
    })
  } catch (err) {
    console.log(err)
  }
}

const GroupTeams = async (req, res) => {
  try {
    const { groups } = req.body
    const { seasonId } = req.params

    let groupFuncs = []
    groups.forEach((group) => {
      standings = []
      group.forEach((team) => {
        standings.push({ team: team })
      })
      const newGroup = new Group({ standings: standings })
      groupFuncs.push(newGroup.save())
    })

    const result = await Promise.all(groupFuncs)
    const seasonGroups = []
    result.forEach((res) => { seasonGroups.push(res._id) })
    const season = await Season.findByIdAndUpdate(seasonId, { groups: seasonGroups }, { new: true })
    return res.status(200).json({
      status: 'success',
      data: { season: season }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { AddSeason, AddTeamsToSeason, GroupTeams }