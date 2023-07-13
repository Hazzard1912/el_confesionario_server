const Etiqueta = require("../models/etiqueta");

const validarEtiqueta = async (req, res, next) => {
  const { nombreEtiqueta } = req.params;

  // Validar si existe registro:
  const etiqueta = await Etiqueta.findOne({
    where: {
      etiqueta: nombreEtiqueta,
    },
  });

  if (!etiqueta) {
    return res.status(400).json({
      msg: "No existe ningun registro con esa etiqueta",
    });
  }

  req.etiqueta = etiqueta;

  next();
};

module.exports = {
  validarEtiqueta,
};
