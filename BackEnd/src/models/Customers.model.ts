import { sequelize } from '@src/configs/initialization.db';
import { customerColumnNames } from '@src/interfaces/modelTypes/customer';
import { DataTypes } from 'sequelize';

const customerAttributes = {
  [customerColumnNames.CustId]: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  [customerColumnNames.CustName]: DataTypes.STRING(25),
  [customerColumnNames.CustMobileNo]: DataTypes.STRING(10),
  [customerColumnNames.CustSociety]: DataTypes.STRING(25),
  [customerColumnNames.CustBlockNo]: DataTypes.STRING(25),
  [customerColumnNames.CustFlatNo]: DataTypes.INTEGER,
  [customerColumnNames.CustAddress]: { type: DataTypes.STRING(25) },
  [customerColumnNames.CustPincode]: DataTypes.INTEGER,
  [customerColumnNames.CustCity]: DataTypes.STRING(10),
  [customerColumnNames.CustMailAddress]: DataTypes.STRING(25),
  [customerColumnNames.paymode1]: DataTypes.STRING(10),
  [customerColumnNames.accname1]: DataTypes.STRING(50),
  [customerColumnNames.paymode2]: DataTypes.STRING(10),
  [customerColumnNames.accname2]: DataTypes.STRING(25),
};

const Customer = sequelize.define('Customer', customerAttributes, { tableName: 'customers', timestamps: false });

export { Customer };
