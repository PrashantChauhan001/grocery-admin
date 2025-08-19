import { ExpressHandler } from '@src/interfaces/types';
import { Customer } from '@src/models';

const getCustomers: ExpressHandler = async (_, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

export { getCustomers };
