const { db } = require("../db/connection")
const DataTypes = require("sequelize")

let Profile = db.define("Profile", {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING,
});



module.exports = Profile;