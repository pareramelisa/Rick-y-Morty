const { DataTypes } = require('sequelize');
// const { sequelize } = require("../DB_connection")

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      email: {
         type: DataTypes.STRING(40),
         allowNull: false,
         unique: true,
      },
      password: {
         type: DataTypes.STRING(64),
         validate: {
            is: /^[0-9a-f]{64}$/i
         }      
      }
   }, { timestamps: false });
};
