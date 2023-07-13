const { Router } = require("express");
const { validarEtiqueta } = require("../middlewares/validar-etiqueta");
const { validarConfesionId } = require("../middlewares/validar-confesion-id");
const {
  asociarConfesionEtiqueta,
  listarConfesionesPorEtiqueta,
} = require("../controllers/confesion_etiquetas.controller");

const router = Router();

router.post(
  "/:nombreEtiqueta/:id",
  [validarEtiqueta, validarConfesionId],
  asociarConfesionEtiqueta
);

router.get("/:nombreEtiqueta", validarEtiqueta, listarConfesionesPorEtiqueta);

module.exports = router;
