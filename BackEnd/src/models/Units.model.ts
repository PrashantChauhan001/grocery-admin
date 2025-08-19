import { sequelize } from '@src/db/initialization.db';
import { DataTypes } from 'sequelize';

const Unit = sequelize.define(
  'Unit',
  {
    name: {
      type: DataTypes.STRING(50),
      unique: true,
      primaryKey: true,
    },
    description: DataTypes.TEXT('tiny'),
  },
  {
    tableName: 'units',
  },
);

// export { Unit };
