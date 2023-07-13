const express = require("express");
const cors = require("cors");
const { connect, sequelize } = require("../database/database");
const Comentario = require("./comentario");
const Etiqueta = require("./etiqueta");
const Confesion_Votos = require("./confesion-votos");
const Reporte = require("./reportes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.allowedOrigins = [];

    this.paths = {
      confesion: "/api/confesion",
      confesion_etiquetas: "/api/confesion-etiquetas",
      confesion_votos: "/api/confesion-votos",
      comentario: "/api/comentario",
      etiqueta: "/api/etiqueta",
      reporte: "/api/reporte",
    };

    this.conectarDB();

    this.middlewares();

    this.routes();
  }

  async conectarDB() {
    await connect();

    await sequelize.sync();
  }

  routes() {
    this.app.use(this.paths.confesion, require("../routes/confesion.routes"));
    this.app.use(this.paths.comentario, require("../routes/comentario.routes"));
    this.app.use(this.paths.etiqueta, require("../routes/etiqueta.routes"));
    this.app.use(
      this.paths.confesion_etiquetas,
      require("../routes/confesion_etiquetas.routes")
    );
    this.app.use(
      this.paths.confesion_votos,
      require("../routes/confesion_votos.routes")
    );
    this.app.use(this.paths.reporte, require("../routes/reporte.routes"));
  }

  middlewares() {
    this.app.use(
      cors({
        origin: this.allowedOrigins,
      })
    );

    this.app.use(express.json());
  }

  startPort() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
