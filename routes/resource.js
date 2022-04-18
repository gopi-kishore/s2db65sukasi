var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var engine_controller = require('../controllers/engine'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/engine', engine_controller.engine_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/engine/:id', engine_controller.engine_delete); 
 
// PUT request to update Costume. 
router.put('/resource/engine/:id', engine_controller.engine_update_put); 
 
// GET request for one Costume. 
router.get('/resource/engine/:id', engine_controller.engine_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/engine', engine_controller.engine_list); 
 
module.exports = router; 