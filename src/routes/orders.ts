import express from 'express';
import OrderController from '../controllers/orders';

const router = express.Router();
const productController = new OrderController();

router.get('/', productController.getAllWithProducts);

export default router;