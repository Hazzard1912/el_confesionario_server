const { Router } = require("express");
const { validarConfesionId } = require("../middlewares/validar-confesion-id");
const {
  cargarComentariosPorConfesion,
  comentarConfesion,
} = require("../controllers/comentario.controller");

const router = Router();

router.get("/:id", validarConfesionId, cargarComentariosPorConfesion);

router.post("/:id", validarConfesionId, comentarConfesion);

module.exports = router;
