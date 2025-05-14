const { db } = require("../db/connection")
const DataTypes = require("sequelize")

let Like = db.define("Like", {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING,
});

module.exports = Like;