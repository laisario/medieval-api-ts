import express from 'express';
import productsRoute from './routes/products';
import usersRoute from './routes/users';
import ordersRoute from './routes/orders';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);
app.use('/orders', ordersRoute);

export default app;