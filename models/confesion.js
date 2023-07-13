const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const Confesion = sequelize.define("Confesion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Confesion;
