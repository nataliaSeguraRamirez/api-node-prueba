const {Product, ProductSchema} = require('./productos.model');

function setupModels(sequelize){
    Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels