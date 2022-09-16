import express from 'express';
import productRoute from './routes/product.routes';
import userRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRouter);

export default app;
