class Usuario {
    constructor(id, firstName, lastName, age, country) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }
}

const allUsers = [
    new Usuario("01", "Apu", "Nahasapeemapetilon", "37", "India"),
    new Usuario("02", "Edna", "Krabappel", "40", "EEUU"),
    new Usuario("03", "Milhouse", "Van Houten", "10", "EEUU"),
    new Usuario("04", "Ned", "Flanders", "60", "EEUU"),
    new Usuario("05", "Troy", "McCLure", "40", "EEUU"),

];

exports.allUsers = allUsers;

const http = require("http");
const host = "localhost";
const port = 8000;

const users = JSON.stringify(allUsers)

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/usuarios":
            res.writeHead(200);
            res.end(users);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ 
                statusCode: "404",
                error: "El usuario no existe" }));
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`El servidor se esta ejecutando en http://${host}:${port}`);
});

/* LINKS DE PRUEBA
http://localhost:8000/usuarios

http://localhost:8000/

*/