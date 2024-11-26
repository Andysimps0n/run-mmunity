const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes)=>{
  const Routes = sequelize.define("Routes", {
    paths : {
      type : DataTypes.STRING,
      allowNull : false
    },
    distances : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
  })
  return Posts
}
