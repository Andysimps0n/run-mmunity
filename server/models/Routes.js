const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes)=>{
  const Routes = sequelize.define("Routes", {
    paths : {
      type : DataTypes.JSON,
      allowNull : false
    },
    distances : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false
    }
  })
  return Routes
}
