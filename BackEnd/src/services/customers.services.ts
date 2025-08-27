import { customerColumnNames } from '@src/interfaces/modelTypes/customer';
import { Customer } from '@src/models';
import asyncWrap from 'express-async-wrapper';
import { Optional } from 'sequelize';

const getCustomerByMobile = asyncWrap(async (mobileNo: number) => {
  const res = await Customer.findAll({ where: { [customerColumnNames.CustMobileNo]: mobileNo } });
  return res;
});
const getCustomerById = asyncWrap(async (id: number) => {
  const res = await Customer.findOne({ where: { [customerColumnNames.CustId]: id } });
  return res;
});
const createCustomer = asyncWrap(async (customerData: Optional<any, string> | undefined) => {
  const customer = Customer.build(customerData);
  await customer.save();
  return customer.dataValues;
});

export { getCustomerByMobile, createCustomer, getCustomerById };
