const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");
const cartItems = require("./definitions/cartItems");
const carts = require("./definitions/carts");
const orderItems = require("./definitions/orderItems");
const orders = require("./definitions/orders");
const products = require("./definitions/products");
const productVarations = require("./definitions/productVariations");
const roles = require("./definitions/roles");

// const models = [users,cartItems,carts,orderItems,orders,products,productVarations,roles];
 
const models={users,cartItems,carts,orderItems,orders,products,roles,productVarations};
const db = {};

db.sequelize = sequelize; // creating a key called sequelize and assigning it the value of the sequelize connection
sequelize.models = models;

module.exports = { models, db }; 