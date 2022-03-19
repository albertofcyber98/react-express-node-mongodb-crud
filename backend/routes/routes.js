const express = require('express');
const router = express.Router();
const Product = require('../model/model');

router.post('/product',(req, res)=>{
    const {name, price, stock, status} = req.body;
    Product.create({name, price, stock, status})
    .then(result => res.send(result))
    .catch(error => res.send(error));
})
router.get('/', (req, res)=>{
    Product.find()
    .then(result => res.send(result))
    .catch(error => res.send(error));
});
router.delete('/product/:id', (req, res)=>{
    Product.deleteOne({
        _id: req.params.id
    })
    .then(result => res.send(result))
    .catch(error => res.send(error));
});
router.get('/product/:id', (req, res) => {
    Product.find({
        _id:req.params.id
    })
    .then(result => res.send(result))
    .catch(error => res.send(error));
})
router.put('/product/:id', (req, res) => {
    const { name, price, stock, status } = req.body;
    Product.where({ _id: req.params.id }).update({
        name: name,
        price: price,
        stock: stock,
        status: status
    })
        .then(result => res.send(result))
        .catch(error => res.send(error));
})


module.exports = router;

