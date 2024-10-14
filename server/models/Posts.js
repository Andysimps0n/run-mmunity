const { DataTypes } = require("sequelize")

module.exports = (sequelize, DataTypes)=>{
  const Posts = sequelize.define("Posts", {
    text : {
      type : DataTypes.STRING,
      allowNull : false
    },
    like : {
      type : DataTypes.INTEGER,
      allowNull : true
    },
  })
  return Posts
} 