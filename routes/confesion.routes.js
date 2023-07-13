const { Router } = require("express");
const {
  cargarConfesiones,
  postearConfesion,
  cargarConfesionPorId,
} = require("../controllers/confesion.controller");
const { validarConfesionId } = require("../middlewares/validar-confesion-id");

const router = Router();

router.get("/", cargarConfesiones);

router.post("/", postearConfesion);

router.get("/:id", validarConfesionId, cargarConfesionPorId);

module.exports = router;
