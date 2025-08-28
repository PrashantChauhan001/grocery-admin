import Joi from 'joi';
import { getListingSchema } from './common.schema';
import { productColumnNames } from '@src/interfaces/modelTypes/products';

const getProductsSchema = getListingSchema;

const addProductSchema = Joi.object({
  [productColumnNames.cat_id]: Joi.number().integer().greater(0),
  [productColumnNames.catName]: Joi.string().max(256),
  [productColumnNames.ename]: Joi.string().max(50).required(),
  [productColumnNames.hname]: Joi.string().max(50),
  [productColumnNames.gname]: Joi.string().max(50),
  [productColumnNames.rate]: Joi.number().greater(0).required(),
  [productColumnNames.unit]: Joi.string().max(25).required(),
  [productColumnNames.NA]: Joi.number().integer().greater(0),
  [productColumnNames.description]: Joi.string(),
  [productColumnNames.image]: Joi.string(),
});

const updateProductSchema = addProductSchema.append({
  [productColumnNames.id]: Joi.number().positive().integer(),
});

const getProductSchema = Joi.object({
  id: Joi.number().integer().greater(0),
}).unknown();

export { getProductsSchema, addProductSchema, getProductSchema, updateProductSchema };
