const Headache = require('../models/headache')

module.exports = {
  create,
  index,
  delete: deleteOne,
  update
}

function update(req, res){
  Headache.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .populate('owner')
  .then(headache => {res.json(headache)})
  .catch(err => {res.json(err)})
}

function deleteOne(req, res) {
  Headache.findByIdAndDelete(req.params.id)
  .then(headache => {res.json(headache)})
  .catch(err => {res.json(err)})
}

function index(req, res) {
  Headache.find({owner: req.user._id})
  // .populate('owner')
  // .then(headaches => {console.log(headaches)})
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
