const Confesion = require("../models/confesion");

const validarConfesionId = async (req, res, next) => {
  const { id } = req.params;
  
  // Validar si existe registro:
  const confesion = await Confesion.findByPk(id);

  if (!confesion) {
    return res.status(400).json({
      msg: "No existe registro con el id proveido",
    });
  }

  req.confesion = confesion;

  next();
};

module.exports = {
  validarConfesionId,
};
