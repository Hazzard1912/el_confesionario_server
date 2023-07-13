const { request, response } = require("express");

const Confesion_Etiquetas = require("../models/confesion_etiquetas");

const asociarConfesionEtiqueta = async (req = request, res = response) => {
  try {
    const etiqueta = req.etiqueta;

    const { id } = req.params;

    const nuevaConfesionEtiqueta = await Confesion_Etiquetas.create({
      etiquetaId: etiqueta.id,
      confesionId: id,
    });

    return res.status(200).json(nuevaConfesionEtiqueta);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const listarConfesionesPorEtiqueta = async (req = request, res = response) => {
  try {
    const etiqueta = req.etiqueta;

    const confesionesEtiqueta = await Confesion_Etiquetas.findAll({
      where: {
        etiquetaId: etiqueta.id,
      },
    });

    return res.status(200).json(confesionesEtiqueta);
  } catch (error) {
    return res.status(500);
  }
};

module.exports = {
  asociarConfesionEtiqueta,
  listarConfesionesPorEtiqueta,
};
