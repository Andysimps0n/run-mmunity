const {DataTypes} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const PostComments = sequelize.define("PostComments", {
    commentText : {
      type : DataTypes.STRING,
      allowNull : false
    }
  })
  return PostComments
}