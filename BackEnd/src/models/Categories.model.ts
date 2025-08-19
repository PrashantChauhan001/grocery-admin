import { sequelize } from '@src/db/initialization.db';
import { DataTypes } from 'sequelize';

const Category = sequelize.define(
  'Category',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cat_name: {
      type: DataTypes.STRING(50),
    },
    cat_description: DataTypes.TEXT,
  },
  { tableName: 'category', timestamps: false },
);

export { Category };
