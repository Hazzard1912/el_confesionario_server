const { request, response } = require("express");

const Reporte = require("../models/reportes");

const verReportesDeConfesion = async (req = request, res = response) => {
  try {
    const confesion = req.confesion;

    const reportes = await Reporte.findAll({
      where: {
        confesionId: confesion.id,
      },
    });

    return res.status(200).json(reportes);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const reportarConfesion = async (req = request, res = response) => {
  try {
    const confesion = req.confesion;

    const { motivo } = req.body;

    const nuevoReporte = await Reporte.create({
      confesionId: confesion.id,
      motivo,
    });

    return res.status(200).json(nuevoReporte);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const verReportes = async (req = request, res = response) => {
  try {
    const reportes = await Reporte.findAll({});

    return res.status(200).json(reportes);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

module.exports = {
  verReportesDeConfesion,
  reportarConfesion,
  verReportes,
};
