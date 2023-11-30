//relations exists here in this file

const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class CARTS extends Model {} // user class will be treated as a model(table) now after extending Model class.

CARTS.init(
    {
        cartId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "carts",
})

module.exports =CARTS;
