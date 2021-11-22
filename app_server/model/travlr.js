const mongoose = require('mongoose');
//trip schema
const tripSchema = new mongoose.Schema({
    code: { type: string, requrired: true, index: true},
    name: {type: string, requrired: true, index: true},
    length: {type: string, requrired: true},
    start: {type: Date, requrired: true},
    resort: {type: string, requrired: true},
    perperson: {type: string, requrired: true},
    image: {type: string, requrired: true},
    description: {type: string, requrired: true}
});
mongoose.model("trips',tripSchema);