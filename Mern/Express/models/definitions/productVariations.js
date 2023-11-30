//relations exists here in this file

const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class PRODUCTVARIATIONS extends Model { } // user class will be treated as a model(table) now after extending Model class.

PRODUCTVARIATIONS.init(
    {
        variationId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
            allowNull:false
        },
        variationPrice: {
            type: DataTypes.INTEGER,
            //allowNull: false,
        },
        variationQunatity: {
            type: DataTypes.INTEGER,
            //allowNull: false,
        }
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "productVariations",
})

module.exports = PRODUCTVARIATIONS;
