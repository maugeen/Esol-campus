const express = require("express");
const router = express.Router();
const User = require("../models/modelUser");


// Creación de datos en la base de datos
router.post("/users", async (req, res) => {
    const data = new User(req.body);
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
});

// Obtención de todos los datos en la base de datos
// Se aplica el populate para mostrar los atributos de la compañia relacionada al usuario 
router.get("/users", function (req, res) {
    User.find({}, function (err, users) {
        Company.populate(users, {path: "company"}, function (err, users) {
            res.status(200).send(users);
        });
    });
});

// Obtención de un dato de la base de datos
router.get("/users/:id", async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// Actualización de un dato de la base de datos
router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true }
        const data = await User.findByIdAndUpdate(id, updatedData, options);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Eliminación de un dato de la base de datos
router.delete("/users/:id", async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;