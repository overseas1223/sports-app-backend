const Competition = require('../models/Competition')

const AddCompetition = async (req, res) => {
  try {
    const newCompetition = new Competition(req.body)
    const competition = await newCompetition.save()

    return res.status(200).json({
      status: 'success',
      data: { competition: competition }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { AddCompetition }