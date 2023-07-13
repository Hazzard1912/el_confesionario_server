const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Confesion = require("./confesion");

const Reporte = sequelize.define("Reporte", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Reporte.belongsTo(Confesion, {
  foreignKey: {
    name: "confesionId",
    allowNull: false,
  },
});

module.exports = Reporte;
