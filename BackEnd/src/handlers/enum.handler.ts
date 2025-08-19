import { Category } from '@src/models';
import { ExpressHandler } from '../interfaces/types';

export const getCategories: ExpressHandler = async (_, res) => {
  const categories = await Category.findAll();
  res.json(categories);
};

export const getPaymentModes: ExpressHandler = async (_, res) => {
  const categories = await Category.findAll();
  res.json(categories);
};

export const getUnits: ExpressHandler = async (_, res) => {
  const categories = await Category.findAll();
  res.json(categories);
};
