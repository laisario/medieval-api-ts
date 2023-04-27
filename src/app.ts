import express from 'express';
import productsRoute from './routes/products';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

export default app;