//relations exists here in this file

const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class ORDERS extends Model {} // user class will be treated as a model(table) now after extending Model class.

ORDERS.init(
    {
        OrderId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "orders",
})

module.exports = ORDERS;
