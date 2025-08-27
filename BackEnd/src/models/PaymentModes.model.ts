import { sequelize } from '@src/configs/initialization.db';
import { DataTypes } from 'sequelize';

const PaymentMode = sequelize.define(
  'PaymentMode',
  {
    name: {
      type: DataTypes.STRING(50),
      unique: true,
      primaryKey: true,
    },
    description: DataTypes.TEXT('tiny'),
  },
  {
    tableName: 'payment_modes',
  },
);

export { PaymentMode };
