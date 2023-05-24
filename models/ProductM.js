import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Product = db.define('product', {
  name: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
  },
  brand: {
    type: DataTypes.STRING
  },
  supplier: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true
});

export default Product;
