import { Router } from 'express';
import { enumRouter } from './enum.route';
import { APP_ROUTE } from 'src/utils/route.constants';
import { productRouter } from './product.route';
import { customerRouter } from './customer.route';

const router = Router();

router.use(APP_ROUTE.ENUM, enumRouter);
router.use(APP_ROUTE.PRODUCTS, productRouter);
router.use(APP_ROUTE.CUSTOMERS, customerRouter);

export default router;
