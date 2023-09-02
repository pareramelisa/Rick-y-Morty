const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
      },
      status:{
         type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
         defaultValue: "Alive",
      },
      species:{
         type: DataTypes.STRING,
      },
      gender:{
         type: DataTypes.STRING,
      },
      origin:{
         type: DataTypes.STRING,
      },
      image:{
         type: DataTypes.STRING
      }
   }, { timestamps: false });
};
