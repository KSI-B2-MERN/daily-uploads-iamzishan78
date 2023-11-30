//relations exists here in this file

const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class ORDERITEMS extends Model {} // user class will be treated as a model(table) now after extending Model class.

ORDERITEMS.init(
    {
        orderItemId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
        },
        orderItemQunatity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true
        },
        orderItemPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique:true
        },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "orderItems",
})

module.exports = ORDERITEMS;
