var express = require('express');
const engine_controlers= require('../controllers/engine'); 
var router = express.Router();

const secured = (req, res, next) => { 
   if (req.user){ 
     return next(); 
   } 
   req.session.returnTo = req.originalUrl; 
   res.redirect("/login"); 
 } 



router.get('/', engine_controlers.engine_view_all_Page ); 
router.get('/engine/:id', engine_controlers.engine_detail);

// GET detail engine page.
router.get('/detail', engine_controlers.engine_view_one_Page); 
/* GET create engine page */ 
router.get('/create',secured, engine_controlers.engine_create_Page);
/* GET create update page */ 
router.get('/update',secured, engine_controlers.engine_update_Page);
/* GET delete engine page */ 
router.get('/delete',secured, engine_controlers.engine_delete_Page);

module.exports = router;
