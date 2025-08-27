import { ExpressHandler } from '@src/interfaces/types';
import { Product } from '@src/models';

const getProducts: ExpressHandler = async (_, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export { getProducts };
