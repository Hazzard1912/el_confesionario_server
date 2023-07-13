const { request, response } = require("express");

const Confesion_Votos = require("../models/confesion-votos");

const cargarConfesionVotos = async (req = request, res = response) => {
  try {
    const confesion = req.confesion;

    const confesion_votos = await Confesion_Votos.findOne({
      where: {
        confesionId: confesion.id,
      },
    });

    return res.status(200).json(confesion_votos);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const cargarMasVotados = async (req = request, res = response) => {
  try {
    const masVotados = await Confesion_Votos.findAll({
      order: [["votos", "DESC"]],
    });

    return res.status(200).json(masVotados);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const crearRegistro = async (req = request, res = response) => {
  try {
    const confesion = req.confesion;

    const nuevaConfesionVotos = await Confesion_Votos.create({
      confesionId: confesion.id,
    });

    return res.status(200).json(nuevaConfesionVotos);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const sumarVoto = async (req = request, res = response) => {
  try {
    const confesion = req.confesion;

    const confesionVotos = await Confesion_Votos.findOne({
      where: {
        confesionId: confesion.id,
      },
    });

    console.log("Los votos actualmente son:", confesionVotos.votos);

    confesionVotos.votos = confesionVotos.votos + 1;
    await confesionVotos.save();

    console.log("Se sumo un voto:", confesionVotos.votos);

    return res.status(200).json(confesionVotos);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

module.exports = {
  cargarConfesionVotos,
  cargarMasVotados,
  crearRegistro,
  sumarVoto,
};
