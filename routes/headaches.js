const router = require('express').Router();
const headachesCtrl = require('../controllers/headaches');

// Public Routes

// Protected Routes
router.use(require('../config/auth'));
router.get('/', checkAuth, headachesCtrl.index);
router.post('/', checkAuth, headachesCtrl.create);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;