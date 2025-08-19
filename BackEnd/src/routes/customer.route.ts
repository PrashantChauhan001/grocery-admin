import { getCustomers } from '@src/handlers/customer.handler';
import { Router } from 'express';

const customerRouter = Router();

customerRouter.get('/', getCustomers);

export { customerRouter };
