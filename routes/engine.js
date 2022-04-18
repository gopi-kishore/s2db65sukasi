var express = require('express');
const engine_controlers= require('../controllers/engine'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('engine', {title: 'Search results for engine'});
});



router.get('/', engine_controlers.engine_view_all_Page ); 

module.exports = router;
