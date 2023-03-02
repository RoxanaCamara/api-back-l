const express = require("express");
const cors = require("cors");
const { createServer } = require("http");

class Server {
  constructor() {
    this.app = express();
    this.port = 8008;
    this.path = {
      auth: "/api/auth",
      sucursales: "/api/sucursales",
      equipos: "/api",
      search: "/api/search",
    };

    this.server = createServer(this.app);

    //Middelwares
    this.middelwares();

    //Routes in app
    this.routes();
  }

  middelwares() {
    //CORS
    this.app.use(cors());

    //Read and parse the body
    this.app.use(express.json());

    //public path
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.path.auth, require("../routes/auth"));
    this.app.use(this.path.sucursales, require("../routes/sucursales"));
    this.app.use(this.path.equipos, require("../routes/equipos"));
    this.app.use(this.path.search, require("../routes/search"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidos Runninn in port", this.port);
    });
  }
}

module.exports = Server;
