const { request, response } = require("express");

const Confesion = require("../models/confesion");
const Confesion_Votos = require("../models/confesion-votos");

const cargarConfesiones = async (req = request, res = response) => {
  try {
    const confesiones = await Confesion.findAll();
    console.log(confesiones);

    return res.status(200).json(confesiones);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const postearConfesion = async (req = request, res = response) => {
  try {
    const { titulo, descripcion } = req.body;

    const nuevaConfesion = await Confesion.create({
      titulo,
      descripcion,
    });

    const asociarConfesionVotos = await Confesion_Votos.create({
      confesionId: nuevaConfesion.id,
    });

    console.log(nuevaConfesion);
    return res.status(200).json({
      msg: "Confesion publicada exitosamente",
      fecha: nuevaConfesion.createdAt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const cargarConfesionPorId = async (req = request, res = response) => {
  try {
    const confesion = req.confesion;

    return res.status(200).json(confesion);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

module.exports = {
  cargarConfesiones,
  postearConfesion,
  cargarConfesionPorId,
};
