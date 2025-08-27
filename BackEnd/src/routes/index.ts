import { Router } from 'express';
import { enumRouter } from './enum.route';
import { APP_ROUTE } from '@src/constants/route.constants';
import { productRouter } from './product.route';
import { customerRouter } from './customer.route';
import { userRouter } from './user.route';

const router = Router();

router.use(APP_ROUTE.ENUM, enumRouter);
router.use(APP_ROUTE.PRODUCTS, productRouter);
router.use(APP_ROUTE.CUSTOMERS, customerRouter);
router.use(APP_ROUTE.USER, userRouter);

export default router;
