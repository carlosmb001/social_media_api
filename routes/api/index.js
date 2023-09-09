const router = require('express').Router();

const userRoutes = require('./usersRoutes');
const reactionRoutes = require('./reactionRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
