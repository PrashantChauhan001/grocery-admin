import Joi from 'joi';

const getListingSchema = Joi.object({
  page: Joi.number().integer().greater(0),
  size: Joi.number().integer().greater(0),
  search: Joi.string().min(1),
}).unknown();

export { getListingSchema };
