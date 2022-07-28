// import important parts of sequelize library
const { DECIMAL } = require('mysql2/lib/constants/types');
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:true,
      primaryKey:true,
      autoIncrement:true,
    },
    product_name:{
      type:DataTypes.STRING,
      allowNull:true,

    },
    price:{
      type:DataTypes.DECIMAL(10,2),
      allowNull:true,

    },
    stock:{
      type:DataTypes.INTEGER,
      allowNull:true,
      defaultValue:10
    },
    category_id:{
      type:DataTypes.INTEGER,
      allowNull:true,
      references:{model:"category",key:"id"},
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
