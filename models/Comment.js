const { db } = require("../db/connection")
const DataTypes = require("sequelize")

let Comment = db.define("Comment", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
});


module.exports = Comment;