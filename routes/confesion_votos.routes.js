const { Router } = require("express");
const { validarConfesionId } = require("../middlewares/validar-confesion-id");
const {
  cargarConfesionVotos,
  cargarMasVotados,
  crearRegistro,
  sumarVoto,
} = require("../controllers/confesion_votos.controller");

const router = Router();

router.get("/:id", validarConfesionId, cargarConfesionVotos);

router.get("/", cargarMasVotados);

router.post("/:id", validarConfesionId, crearRegistro);

router.put("/:id", validarConfesionId, sumarVoto)

module.exports = router;
