const mongoose = require("mongoose");

const schema = mongoose.Schema({
    CarName: String,
    carColour: String,
    CarPrice: Number,
    CarNoPlate: Number
});
module.exports = mongoose.model("Car", schema);