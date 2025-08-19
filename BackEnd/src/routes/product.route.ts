import { getProducts } from '@src/handlers/product.handler';
import { Router } from 'express';

const productRouter = Router();

productRouter.get('/', getProducts);

export { productRouter };
