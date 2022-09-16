import express from 'express';
import ordersRouter from './routes/orders.routes';
import productRoute from './routes/product.routes';
import userRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);

export default app;
