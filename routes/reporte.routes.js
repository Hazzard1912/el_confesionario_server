const { Router } = require("express");
const { validarConfesionId } = require("../middlewares/validar-confesion-id");
const {
  verReportesDeConfesion,
  reportarConfesion,
  verReportes,
} = require("../controllers/reporte.controller");

const router = Router();

router.get("/", verReportes);

router.get("/:id", validarConfesionId, verReportesDeConfesion);

router.post("/:id", validarConfesionId, reportarConfesion);

module.exports = router;
