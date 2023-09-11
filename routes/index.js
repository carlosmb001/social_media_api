// import all the API routes from the /api/index.js
const router = require('express').Router();
//add prefix of `/api` to all of the api routes imported from the `api` directory
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
