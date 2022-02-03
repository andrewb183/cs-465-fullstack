const mongoose = require('mongoose');
//trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, requrired: true, index: true},
    name: {type: String, requrired: true, index: true},
    length: {type: String, requrired: true},
    start: {type: Date, requrired: true},
    resort: {type: String, requrired: true},
    perperson: {type: String, requrired: true},
    image: {type: String, requrired: true},
    description: {type: String, requrired: true}
});
module.exports = mongoose.model("trips", tripSchema);