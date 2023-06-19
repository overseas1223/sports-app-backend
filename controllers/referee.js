const Referee = require('../models/Referee')

const AddReferee = async (req, res) => {
  try {
    const newReferee = new Referee(req.body)
    const referee = await newReferee.save()

    return res.status(200).json({
      status: 'success',
      data: { referee: referee }
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { AddReferee }