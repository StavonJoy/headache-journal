const Headache = require('../models/headache')

module.exports = {
  create,
  index,
}

function index(req, res) {
  Headache.find({})
  .populate('owner')
  .then(headaches => {res.json(headaches)})
  .catch(err => {res.json(err)})
}

function create(req, res) {
  req.body.owner = req.user._id
  req.body.medsUsed = req.body.medsUsed.split(',');
  Headache.create(req.body)
    .then(headache => { res.json(headache) })
    .catch(err => { res.json(err)} )
}