const router = require('express').Router();
const headachesCtrl = require('../controllers/headaches');

// Public Routes

// Protected Routes
router.use(require('../config/auth'));
router.get('/', checkAuth, headachesCtrl.index);
router.post('/', checkAuth, headachesCtrl.create);
router.delete('/:id', checkAuth, headachesCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized - headache page'});
}

module.exports = router;