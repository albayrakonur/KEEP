var express = require('express');
var Product = require('../model/productModel');
var router = express.Router();

/* Product Listeleme Islemi Burada Yapilacak. */
router.get('/', function (req, res, next) {

    Product.find().then((product) => {
        res.json(product);
    }).catch((err) => {
        res.json(err);
    });

});

/* Product Arama Islemi Burada Yapilacak. */
router.get('/:id', function (req, res, next) {
    Product.find({barcode: req.params.id}).then((product) => {
        res.json(product);
    }).catch((err) => {
        res.json(err);
    });

});

/* Product Ekleme Islemi Burada Yapilacak. */
router.post("/", function (req, res, next) {
    new Product({
        name: req.body.name,
        barcode: req.body.barcode,
        price: req.body.price,
    }).save().then(() => {
        res.json("Kaydetme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Kaydetme İşleminde Hata Oluştu.");
    });

});

/* Product Guncelleme Islemi Burada Yapilacak. */

/* Product Silme Islemi Burada Yapilacak. */

module.exports = router;