//relations exists here in this file

const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class USERS extends Model {} // user class will be treated as a model(table) now after extending Model class.

USERS.init(
    {
        userId: {
            primaryKey: true,
            type: DataTypes.STRING(),
        },
        firstName: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(34),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "users",
})

module.exports = USERS;
