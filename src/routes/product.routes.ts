import { Router } from 'express';
import productsController from '../controller/products.controller';

const productRoute = Router();

productRoute.get('/', productsController.getAll);
productRoute.post('/', productsController.create);

export default productRoute;
