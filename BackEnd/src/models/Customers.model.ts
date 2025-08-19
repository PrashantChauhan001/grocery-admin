import { sequelize } from '@src/db/initialization.db';
import { DataTypes } from 'sequelize';

const Customer = sequelize.define(
  'Customer',
  {
    CustId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    CustName: DataTypes.STRING(25),
    CustMobileNo: DataTypes.STRING(10),
    CustSociety: DataTypes.STRING(25),
    CustBlockNo: DataTypes.STRING(25),
    CustFlatNo: DataTypes.INTEGER,
    CustAddress: DataTypes.STRING(25),
    CustPincode: DataTypes.INTEGER,
    CustCity: DataTypes.STRING(10),
    CustMailAddress: DataTypes.STRING(25),
    paymode1: DataTypes.STRING(10),
    accname1: DataTypes.STRING(50),
    paymode2: DataTypes.STRING(10),
    accname2: DataTypes.STRING(25),
  },
  { tableName: 'customers', timestamps: false },
);

export { Customer };
