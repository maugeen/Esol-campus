require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

//Conexión a la base de datos
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
    console.error(error);
});

database.once("connected", () => {
    console.log("Base de datos conectada");
});

//Servidor web
const app = express();
app.use(express.json());
const routes = require("./routes/routes");
app.use("/api", routes);
app.use(cors());


app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor express ejecutándose en http://${process.env.HOST}:${process.env.PORT}/`);
});