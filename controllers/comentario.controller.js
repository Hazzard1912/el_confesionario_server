const { request, response } = require("express");

const Comentario = require("../models/comentario");

const cargarComentariosPorConfesion = async (req = request, res = response) => {
  try {
    const confesion = req.confesion;

    console.log(confesion);

    const comentarios = await Comentario.findAll({
      where: {
        confesionId: confesion.id,
      },
    });

    console.log(comentarios);

    return res.status(200).json(comentarios);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

const comentarConfesion = async (req = request, res = response) => {
  try {
    const confesion = req.confesion;

    const { comentario } = req.body;

    console.log(comentario);
    console.log('esto se ejecuta');

    console.log(confesion);

    const nuevoComentario = await Comentario.create({
      comentario,
      confesionId: confesion.id,
    });

    console.log(nuevoComentario);

    return res.status(200).json(nuevoComentario);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

module.exports = {
  cargarComentariosPorConfesion,
  comentarConfesion,
};
