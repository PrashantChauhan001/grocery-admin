import { sequelize } from '@src/db/initialization.db';
import { Category } from './Categories.model';
import { PaymentMode } from './PaymentModes.model';
import { Product } from './Products.model';
import { Customer } from './Customers.model';

sequelize.sync();

export { Category, PaymentMode, Product, Customer };
