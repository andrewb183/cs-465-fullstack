var express = require('express');
var router = express.Router();
const controllers = require('../controllers/travel');
/* GET home page. */
router.get('/', controllers.travel);

module.exports = router;
