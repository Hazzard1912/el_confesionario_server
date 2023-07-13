const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Confesion = require("./confesion");

const Confesion_Votos = sequelize.define("Confesion_Votos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    votos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

Confesion_Votos.belongsTo(Confesion, {
  foreignKey: {
    name: "confesionId",
    allowNull: false,
  },
});

module.exports = Confesion_Votos;
