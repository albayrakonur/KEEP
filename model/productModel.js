var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    barcode: String,
    price: Number,
});

module.exports = mongoose.model("product", productSchema);