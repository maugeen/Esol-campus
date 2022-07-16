const express = require("express");
const router = express.Router();
const Company = require("../models/modelCompany")

// Creación de datos en la base de datos
router.post("/companies", async (req, res) => {
    const data = new Company(req.body);
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Obtención de todos los datos en la base de datos
router.get("/companies", async (req, res) => {
    try {
        const data = await Company.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Obtención de un dato de la base de datos
router.get("/companies/:id", async (req, res) => {
    try {
        const data = await Company.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// Actualización de un dato de la base de datos
router.put("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new : true }
        const data = await Company.findByIdAndUpdate(id, updatedData, options);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Eliminación de un dato de la base de datos
router.delete("/companies/:id", async (req, res) => {
    try {
        const data = await Company.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;