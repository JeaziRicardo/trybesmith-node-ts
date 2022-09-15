import { Router } from 'express';
import productsController from '../controller/products.controller';

const productRoute = Router();

productRoute.post('/', productsController.create);

export default productRoute;
