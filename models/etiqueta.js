const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const Etiqueta = sequelize.define(
  "Etiqueta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    etiqueta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Etiqueta;
