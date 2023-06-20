const Season = require('../models/Season')
const Match = require('../models/Match')
const Tournament = require('../models/Tournament')

const CreateTournament = async (req, res) => {
  try {
    const { seasonId, teams } = req.body
    const season = await Season.findById(seasonId)
    const matches = []

    for (let i = 0; i < teams.length; i += 2) {
      matches.push({
        team1: teams[i],
        team2: teams[i + 1]
      })
    }

    const newTournament = new Tournament({ rounds: [matches] })
    const tournament = await newTournament.save()
    const updatedSeason = await Season.findByIdAndUpdate(season._id, { tournament: tournament }, { new: true })

    return res.status(200).json({
      status: 'success',
      data: { season: updatedSeason, tournament: tournament }
    })
  } catch (err) {
    console.log(err)
  }
}

const AddMatchToTournament = async (req, res) => {
  try {
    const { tournamentId } = req.params
    const { roundIndex, match } = req.body
    const newMatch = new Match(match)
    const resMatch = await newMatch.save()

    const tournament = await Tournament.findById(tournamentId)
    const foundIndex = tournament.rounds[roundIndex].findIndex((m) => String(m.team1) === String(match.homeTeam) && String(m.team2) === String(match.awayTeam))
    tournament.rounds[roundIndex][foundIndex].result = resMatch._id
    const updatedTournament = await tournament.save()

    return res.status(200).json({
      status: 'success',
      data: { match: resMatch, tournament: updatedTournament }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { CreateTournament, AddMatchToTournament }