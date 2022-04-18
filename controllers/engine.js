var Engine = require('../models/engine'); 
 
// List of all Engines 
exports.engine_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine list'); 
}; 
 
// for a specific Costume. 
exports.engine_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Engine.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
exports.engine_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Engine(); 
    document.turboengine_name = req.body.turboengine_name; 
    document.size = req.body.size; 
    document.turboengine_cost = req.body.turboengine_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Engine delete form on DELETE. 
exports.engine_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engine delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.engine_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Engine.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.turboengine_name)  
               toUpdate.turboengine_name = req.body.turboengine_name; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.turboengine_cost) toUpdate.turboengine_cost = req.body.turboengine_cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// List of all Engine 
exports.engine_list = async function(req, res) { 
    try{ 
        theEngine = await Engine.find(); 
        res.send(theEngine); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.engine_view_all_Page = async function(req, res) { 
    try{ 
        theEngine = await Engine.find(); 
        res.render('engine', { title: 'Engine Search Results', results: theEngine }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
