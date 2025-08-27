import { getCategories, getPaymentModes, getUnits } from '@src/controller/enum.controller';
import { APP_ROUTE } from '@src/constants/route.constants';
import { Router } from 'express';

const enumRouter = Router();

enumRouter.get(APP_ROUTE.CATEGORIES, getCategories);
enumRouter.post(APP_ROUTE.PAYMENT_MODES, getPaymentModes);
enumRouter.post(APP_ROUTE.UNITS, getUnits);
// enumRouter.get(APP_ROUTE.PAYMENT_MODES, );
// enumRouter.get(APP_ROUTE.UNITS, );
export { enumRouter };
