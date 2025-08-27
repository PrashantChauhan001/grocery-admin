import Joi from 'joi';

const createCustomerReqSchema = Joi.object({
  name: Joi.string().max(25).required(),
  mobile: Joi.string().max(10).required(),
  flateNo: Joi.string().max(25).required(),
  blockNo: Joi.string().max(25),
  society: Joi.string().max(25).required(),
  address: Joi.string().max(25),
  pincode: Joi.number().integer(),
  city: Joi.string().max(10),
  email: Joi.string().email(),
  payMode1: Joi.string().max(10),
  accName1: Joi.string().max(25),
  payMode2: Joi.string().max(10),
  accName2: Joi.string().max(25),
});

const updateCustomerSchema = createCustomerReqSchema.append({
  id: Joi.number().integer().required().greater(0),
});

const getCustomersSchema = Joi.object({
  page: Joi.number().integer().greater(0),
  size: Joi.number().integer().greater(0),
  search: Joi.string().min(1),
}).unknown();
const getCustomerSchema = Joi.object({
  id: Joi.number().integer().greater(0),
}).unknown();

export { createCustomerReqSchema, getCustomersSchema, getCustomerSchema, updateCustomerSchema };
