import { Router } from 'express';
import ordersController from '../controller/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getAll);

export default ordersRouter;