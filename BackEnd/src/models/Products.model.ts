import { sequelize } from '@src/db/initialization.db';
import { DataTypes } from 'sequelize';

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cat_id: DataTypes.INTEGER,
    ename: DataTypes.STRING(50),
    catName: DataTypes.TEXT('medium'),
    hname: DataTypes.STRING(50),
    gname: DataTypes.STRING(50),
    rate: DataTypes.FLOAT,
    unit: DataTypes.STRING(25),
    NA: DataTypes.TINYINT,
    description: DataTypes.TEXT('long'),
    image: DataTypes.STRING(100),
  },
  {
    tableName: 'products',
    timestamps: false,
  },
);

export { Product };
