const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Confesion = require("./confesion");

const Comentario = sequelize.define("Comentario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Comentario.belongsTo(Confesion, {
  foreignKey: {
    name: "confesionId",
    allowNull: false,
  },
});

module.exports = Comentario;
