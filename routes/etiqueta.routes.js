const { Router } = require("express");
const { cargarEtiquetas, crearEtiqueta } = require("../controllers/etiqueta.controller");

const router = Router();

router.get("/", cargarEtiquetas);

router.post("/", crearEtiqueta);

module.exports = router;
