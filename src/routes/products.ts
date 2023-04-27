import express from 'express';
import ProductController from '../controllers/product';

const router = express.Router();
const productController = new ProductController();

router.post('/', productController.create);
router.get('/', productController.getAll);

export default router;