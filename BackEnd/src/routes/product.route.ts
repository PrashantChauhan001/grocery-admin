import { APP_ROUTE, APP_ROUTE_PARAM, REQ_KEY } from '@src/constants/route.constants';
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from '@src/controller/product.controller';
import { verifySchema } from '@src/helpers/validation.helpers';
import { addProductSchema, getProductSchema, getProductsSchema, updateProductSchema } from '@src/helpers/validationSchemas/products.schema';
import { Router } from 'express';

const productRouter = Router();

// products route
productRouter.get(APP_ROUTE.ROOT, verifySchema(getProductsSchema, REQ_KEY.QUERY), getProducts);
productRouter.post(APP_ROUTE.ROOT, verifySchema(addProductSchema, REQ_KEY.BODY), addProduct);
productRouter.put(APP_ROUTE.ROOT, verifySchema(updateProductSchema, REQ_KEY.BODY), updateProduct);

// product id route
productRouter.get(APP_ROUTE_PARAM.ID, verifySchema(getProductSchema, REQ_KEY.PARAMS), getProduct);
productRouter.delete(APP_ROUTE_PARAM.ID, verifySchema(getProductSchema, REQ_KEY.PARAMS), deleteProduct);

export { productRouter };
