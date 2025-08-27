import { APP_ROUTE } from '@src/constants/route.constants';
import { getProducts } from '@src/controller/product.controller';
import { Router } from 'express';

const productRouter = Router();

productRouter.get(APP_ROUTE.ROOT, getProducts);

export { productRouter };
