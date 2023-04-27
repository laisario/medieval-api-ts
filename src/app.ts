import express from 'express';
import productsRoute from './routes/products';
import usersRoute from './routes/users';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', usersRoute);

export default app;