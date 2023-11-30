//relations exists here in this file

const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class CARTITEMS extends Model {} // user class will be treated as a model(table) now after extending Model class.

CARTITEMS.init(
    {
        cartItemId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "cartItems",
})

module.exports = CARTITEMS;
