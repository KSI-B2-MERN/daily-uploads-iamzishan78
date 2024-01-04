//relations exists here in this file

const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class PRODUCTS extends Model {} // user class will be treated as a model(table) now after extending Model class.

PRODUCTS.init(
    {
        productId: {
            primaryKey: true,
            type: DataTypes.STRING(90),
          },
          productName: {
            type: DataTypes.STRING(34),
            allowNull: false,
          },
          images: {
            type: DataTypes.ARRAY(DataTypes.STRING()),
            // allowNull: false,
          },
          price: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING(),
            allowNull: false,
          },
    }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: "products",
})

module.exports = PRODUCTS;
