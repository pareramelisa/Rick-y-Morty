const express = require("express");
const routes = require("./routes/index");
const { database } = require("./DB_connection");


const server = express();
const PORT = 3001;

//Configuracion que parsea la ifno a json para q el server la pueda leer
server.use(express.json());

//Configuracion de lops headers de las peticiones
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", routes);

database.sync({ force: true }).then(() => {
}).catch(err => console.log(err));

server.listen(PORT, () => {
  console.log("http://localhost:" + PORT + "/rickandmorty/");
});

module.exports = {
  server,
};
