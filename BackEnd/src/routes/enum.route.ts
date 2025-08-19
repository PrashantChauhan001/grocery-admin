import { getCategories, getPaymentModes, getUnits } from '@src/handlers/enum.handler';
import { APP_ROUTE } from '@src/utils/route.constants';
import { Router } from 'express';

const enumRouter = Router();

enumRouter.get(APP_ROUTE.CATEGORIES, getCategories);
enumRouter.post(APP_ROUTE.PAYMENT_MODES, getPaymentModes);
enumRouter.post(APP_ROUTE.UNITS, getUnits);
// enumRouter.get(APP_ROUTE.PAYMENT_MODES, );
// enumRouter.get(APP_ROUTE.UNITS, );
export { enumRouter };
