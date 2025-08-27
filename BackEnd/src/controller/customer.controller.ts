import RESPONSE_CODES from '@src/constants/response.constants';
import { cleanObj, getResponse } from '@src/helpers/common.helpers';
import { ErrorHandler } from '@src/helpers/error';
import { customerColumnNames } from '@src/interfaces/modelTypes/customer';
import { getRequest, postRequest } from '@src/interfaces/types';
import { Customer } from '@src/models/Customers.model';
import { createCustomer, getCustomerById, getCustomerByMobile } from '@src/services/customers.services';
import { Response } from 'express';
import asyncWrap from 'express-async-wrapper';
import { FindAndCountOptions, literal, Model, Op } from 'sequelize';

// const getCustomers = asyncWrap(async (req: Request, res: Response) => {
const getCustomers = asyncWrap(async (req: getRequest, res: Response) => {
  const { page = 1, size = 25, search = '' } = req.query;
  const queryObj: FindAndCountOptions = {
    offset: (page - 1 || 0) * size || 0,
    limit: size,
    order: [[customerColumnNames.CustName, 'ASC']],
  };
  if (search) {
    queryObj.where = {
      [Op.or]: [{ [customerColumnNames.CustName]: { [Op.substring]: search } }, { [customerColumnNames.CustMobileNo]: { [Op.substring]: search } }],
    };
  }
  queryObj.order = [
    [literal(`CASE WHEN ${customerColumnNames.CustName} = '' THEN 1 ELSE 0 END`), 'ASC'],
    [customerColumnNames.CustName, 'ASC'],
  ];
  const { count, rows: customers } = await Customer.findAndCountAll(queryObj);
  res
    .status(RESPONSE_CODES[200].code)
    .json(getResponse({ data: { customers, totalCount: count, page: page || 1, size: queryObj.limit }, status: RESPONSE_CODES[200] }));
});

const addCustomer = asyncWrap(async (req: postRequest, res: Response) => {
  const {
    name: CustName,
    mobile: CustMobileNo,
    flateNo: CustFlatNo,
    blockNo: CustBlockNo,
    society: CustSociety,
    payMode1,
    accName1,
    payMode2,
    accName2,
    address: CustAddress,
    pincode: CustPincode,
    city: CustCity,
  } = req.body;
  const isCustExist: Model<any, any>[] = await getCustomerByMobile(CustMobileNo);
  if (!isCustExist?.length) {
    throw new ErrorHandler(RESPONSE_CODES[409].code, 'Mobile already exist into the records.');
  }
  const custInfo = {
    CustName,
    CustMobileNo,
    CustFlatNo,
    CustBlockNo,
    CustSociety,
    payMode1,
    payMode2,
    accName1,
    accName2,
    CustAddress,
    CustPincode,
    CustCity,
  };
  const customer = await createCustomer(cleanObj(custInfo));

  res.status(RESPONSE_CODES[201].code).json(getResponse({ status: RESPONSE_CODES[201], data: customer, message: 'Customer created successfully.' }));
});

const getCustomer = asyncWrap(async (req: postRequest, res: Response) => {
  const { id } = req.params;
  const isCustExist = await getCustomerById(id);
  if (isCustExist) {
    res.status(RESPONSE_CODES[200].code).json(getResponse({ data: isCustExist?.dataValues, status: RESPONSE_CODES[200] }));
  } else {
    throw new ErrorHandler(RESPONSE_CODES[404].code, 'Record not found.');
  }
});

const updateCustomer = asyncWrap(async (req: postRequest, res: Response) => {
  const {
    id: CustId,
    name: CustName,
    mobile: CustMobileNo,
    flateNo: CustFlatNo,
    blockNo: CustBlockNo,
    society: CustSociety,
    payMode1,
    accName1,
    payMode2,
    accName2,
    address: CustAddress,
    pincode: CustPincode,
    city: CustCity,
  } = req.body;
  const customer: Model<any, any> | null = await getCustomerById(CustId);
  if (!customer) {
    throw new ErrorHandler(RESPONSE_CODES[404].code, 'Customer not found with given id.');
  }
  const isCustExist2: Model<any, any>[] = await getCustomerByMobile(CustMobileNo);
  if (isCustExist2?.length > 1 || (isCustExist2?.length > 0 && isCustExist2[0].dataValues.CustId !== CustId)) {
    throw new ErrorHandler(RESPONSE_CODES[400].code, 'Mobile No already exist.');
  }
  const custInfo = {
    // CustId,
    CustName,
    CustMobileNo,
    CustFlatNo,
    CustBlockNo,
    CustSociety,
    payMode1,
    payMode2,
    accName1,
    accName2,
    CustAddress,
    CustPincode,
    CustCity,
  };
  Object.keys(custInfo).forEach((key: string) => {
    (customer as any)[key] = (custInfo as any)[key];
  });
  customer.save();

  res
    .status(RESPONSE_CODES[200].code)
    .json(getResponse({ status: RESPONSE_CODES[201], data: customer.dataValues, message: 'Customer updated successfully.' }));
});

const deleteCustomer = asyncWrap(async (req: postRequest, res: Response) => {
  const { id } = req.params;
  const customer: Model<any, any> = await getCustomerById(id);
  if (customer) {
    customer.destroy();
    res.status(RESPONSE_CODES[200].code).json(getResponse({ data: customer?.dataValues, status: RESPONSE_CODES[200] }));
  } else {
    throw new ErrorHandler(RESPONSE_CODES[404].code, 'Record not found.');
  }
});

export { addCustomer, getCustomers, getCustomer, updateCustomer, deleteCustomer };
