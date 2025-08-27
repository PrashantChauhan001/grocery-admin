import { APP_ROUTE, APP_ROUTE_PARAM, REQ_KEY } from '@src/constants/route.constants';
import { addCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer } from '@src/controller/customer.controller';
import { verifySchema } from '@src/helpers/validation.helpers';
import { createCustomerReqSchema, getCustomerSchema, getCustomersSchema, updateCustomerSchema } from '@src/helpers/validationSchemas/customers';
import { Router } from 'express';

const customerRouter = Router();

// root /customer route
customerRouter.get(APP_ROUTE.ROOT, verifySchema(getCustomersSchema, REQ_KEY.QUERY), getCustomers);
customerRouter.post(APP_ROUTE.ROOT, verifySchema(createCustomerReqSchema, REQ_KEY.BODY), addCustomer);
customerRouter.patch(APP_ROUTE.ROOT, verifySchema(updateCustomerSchema, REQ_KEY.BODY), updateCustomer);

// child /customers/* route
customerRouter.get(APP_ROUTE_PARAM.ID, verifySchema(getCustomerSchema, REQ_KEY.PARAMS), getCustomer);
customerRouter.delete(APP_ROUTE_PARAM.ID, verifySchema(getCustomerSchema, REQ_KEY.PARAMS), deleteCustomer);

export { customerRouter };
