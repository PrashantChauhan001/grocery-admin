import { sequelize } from '@src/configs/initialization.db';
import { productColumnNames } from '@src/interfaces/modelTypes/products';
import { DataTypes } from 'sequelize';

const Product = sequelize.define(
  'Product',
  {
    [productColumnNames.id]: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    [productColumnNames.cat_id]: DataTypes.INTEGER,
    [productColumnNames.ename]: DataTypes.STRING(50),
    [productColumnNames.catName]: DataTypes.TEXT('medium'),
    [productColumnNames.hname]: DataTypes.STRING(50),
    [productColumnNames.gname]: DataTypes.STRING(50),
    [productColumnNames.rate]: DataTypes.FLOAT,
    [productColumnNames.unit]: DataTypes.STRING(25),
    [productColumnNames.NA]: DataTypes.TINYINT,
    [productColumnNames.description]: DataTypes.TEXT('long'),
    [productColumnNames.image]: DataTypes.STRING(100),
  },
  {
    tableName: 'products',
    timestamps: false,
  },
);

export { Product };
