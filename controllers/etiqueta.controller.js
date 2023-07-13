const { request, response } = require("express");

const Etiqueta = require("../models/etiqueta");

const cargarEtiquetas = async (req = request, res = response) => {
  try {
    const etiquetas = await Etiqueta.findAll({});

    console.log(etiquetas);

    return res.status(200).json(etiquetas);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const crearEtiqueta = async (req = request, res = response) => {
  try {
    const { etiqueta } = req.body;

    const nuevaEtiqueta = await Etiqueta.create({
      etiqueta,
    });

    return res.status(200).json(nuevaEtiqueta);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

module.exports = {
  cargarEtiquetas,
  crearEtiqueta,
};
