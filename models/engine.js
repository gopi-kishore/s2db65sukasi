const mongoose = require("mongoose") 
const engineSchema = mongoose.Schema({ 
    turboengine_name: String, 
    size: String, 
    turboengine_cost: Number 
}) 
 
module.exports = mongoose.model("Engine", engineSchema) 