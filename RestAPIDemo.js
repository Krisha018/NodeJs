const express = require("express");
const mongoose = require("mongoose");
const Car = require("./model/car");
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://Krisha:Krisha@cluster0.z7bomx3.mongodb.net/supercar?retryWrites=true&w=majority').then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }))

    app.get('/carsdetails', async(req, res) => {
        const data = await Car.find();
        res.send(data);
    });

    app.get('/car/:id', async(req, res) => {
        const data = await Car.findOne({ CarName: req.params.id });
        res.send(data);
    });


    app.listen(3003, () => {
        console.log("Server at start @3003");
    })
})