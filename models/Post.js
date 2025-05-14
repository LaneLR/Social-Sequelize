const { db } = require("../db/connection");
const DataTypes = require("sequelize")

let Post = db.define("Post", {
  title: DataTypes.STRING,
  body: DataTypes.STRING,
  createdAt: DataTypes.STRING,
});

module.exports = Post;
