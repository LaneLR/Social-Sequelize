const { db } = require("../db/connection")
const DataTypes = require("sequelize")

let User = db.define("User", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
});



module.exports = User;