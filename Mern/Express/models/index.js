const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");
const cartItems = require("./definitions/cartItems");
const carts = require("./definitions/carts");
const orderItems = require("./definitions/orderItems");
const orders = require("./definitions/orders");
const products = require("./definitions/products");
const productVarations = require("./definitions/productVariations");
const roles = require("./definitions/roles");
const session = require("./definitions/session");

// const models = [users,cartItems,carts,orderItems,orders,products,productVarations,roles];

const models={users,cartItems,carts,orderItems,orders,products,roles,productVarations,session};
const db = {};

//one to one relations
//users-roles 1:1
roles.hasOne(users,{foreignKey:"roleId"});
users.belongsTo(roles,{foreignKey:"roleId"});

//one to many relations

//users-roles 1:M
users.hasMany(orders,{foreignKey:"userId"});
orders.belongsTo(users,{foreignKey:"userId"});

//users-products 1:M
users.hasMany(products,{foreignKey:"userId"});
products.belongsTo(users,{foreignKey:"userId"});

//products-productvariations 1:M
products.hasMany(productVarations,{foreignKey:"productId"});
productVarations.belongsTo(products,{foreignKey:"productId"});

//productVarations-cartItems 1:M && carts-cartItems 1:M (productVariations-cartItems-carts M:M)
productVarations.hasMany(cartItems,{foreignKey:"productVariationId"});
cartItems.belongsTo(productVarations,{foreignKey:"productVariationId"});

carts.hasMany(cartItems,{foreignKey:"cartId"});
cartItems.belongsTo(carts,{foreignKey:"cartId"});

//productvariations-orderItems 1:M && orders-orderItems 1:M (productVariations-orderItems-orders M-M)
productVarations.hasMany(orderItems,{foreignKey:"productVariationId"});
orderItems.belongsTo(productVarations,{foreignKey:"productVariationId"});

orders.hasMany(orderItems,{foreignKey:"orderId"});
orderItems.belongsTo(orders,{foreignKey:"orderId"});


db.sequelize = sequelize; // creating a key called sequelize and assigning it the value of the sequelize connection
sequelize.models = models;

module.exports = { models, db }; 