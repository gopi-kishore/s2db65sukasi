var express = require('express');
const engine_controlers= require('../controllers/engine'); 
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('engine', {title: 'Search results for engine'});
});



router.get('/', engine_controlers.engine_view_all_Page ); 

router.get('/', engine_controlers.engine_view_all_Page ); 
router.get('/engine/:id', engine_controlers.engine_detail);

// GET detail engine page.
router.get('/detail', engine_controlers.engine_view_one_Page); 
/* GET create engine page */ 
router.get('/create', engine_controlers.engine_create_Page);
/* GET create update page */ 
router.get('/update', engine_controlers.engine_update_Page);
/* GET delete engine page */ 
router.get('/delete', engine_controlers.engine_delete_Page);

module.exports = router;
