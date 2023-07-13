const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Confesion = require("./confesion");
const Etiqueta = require("./etiqueta");

const Confesion_Etiquetas = sequelize.define(
  "Confesion_Etiquetas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

Confesion_Etiquetas.belongsTo(Confesion, {
  foreignKey: {
    name: "confesionId",
    allowNull: false,
  },
});

Confesion_Etiquetas.belongsTo(Etiqueta, {
  foreignKey: {
    name: "etiquetaId",
    allowNull: false,
  },
});

module.exports = Confesion_Etiquetas;
