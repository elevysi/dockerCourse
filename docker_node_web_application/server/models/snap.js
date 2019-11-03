const mongoose = require("mongoose");
const snapSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : String,
    path : String,
    location : String

});

module.exports = mongoose.model("Snap" , snapSchema);