const {Model, DataTypes } = require('sequelize');

const PRODUCTS_TABLE = 'products';

class Product extends Model{
    static config(sequelize){
        return{
            sequelize, 
            tableName: PRODUCTS_TABLE,
            modelName: 'Product',
            timestamps: true,
        }
    }
}

const ProductSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name',
    },
    description:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'description'
    },
    imageURL: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'imageURL'
    },
    price: {
        allowNull: false,
        type: DataTypes.FLOAT,
        field: 'price'
    }
}

module.exports = { Product, ProductSchema}