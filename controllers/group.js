const Group = require('../models/Group')
const Match = require('../models/Match')

const AddMatchToGroup = async (req, res) => {
  try {
    const { groupId } = req.params
    const newMatch = new Match(req.body)
    const match = await newMatch.save()

    const group = await Group.findById(groupId)
    const matches = [...group.matches, match._id]
    const resultStandings = group.standings.map((standing) => {
      if (String(standing.team) === String(match.homeTeam)) {
        const homeScores = match.normalTime.home.goal * 3 + match.normalTime.home.point
        const awayScores = match.normalTime.away.goal * 3 + match.normalTime.away.point

        if (homeScores > awayScores) standing.win += 1
        else if (homeScores === awayScores) standing.draw += 1
        else standing.loss += 1

        standing.scoreFor.goal += match.normalTime.home.goal
        standing.scoreFor.point += match.normalTime.home.point
        standing.scoreAgainst.goal += match.normalTime.away.goal
        standing.scoreAgainst.point += match.normalTime.away.point
      } else if (String(standing.team) === String(match.awayTeam)) {
        const homeScores = match.normalTime.home.goal * 3 + match.normalTime.home.point
        const awayScores = match.normalTime.away.goal * 3 + match.normalTime.away.point

        if (homeScores < awayScores) standing.win += 1
        else if (homeScores === awayScores) standing.draw += 1
        else standing.loss += 1

        standing.scoreFor.goal += match.normalTime.away.goal
        standing.scoreFor.point += match.normalTime.away.point
        standing.scoreAgainst.goal += match.normalTime.home.goal
        standing.scoreAgainst.point += match.normalTime.home.point
      }
      return standing
    })

    const updatedGroup = await Group.findByIdAndUpdate(groupId, { matches: matches, standings: resultStandings }, { new: true })
    return res.status(200).json({
      status: 'success',
      data: { group: updatedGroup, match: match }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { AddMatchToGroup }