import { Request, Response } from 'express';
import OrderService from '../services/orders';
import ProductService from '../services/products';
import { OrderWithProducts } from '../interfaces/orders';

class OrderController {
  orderService: OrderService;

  productService: ProductService;

  constructor(orderService = new OrderService(), productService = new ProductService()) {
    this.orderService = orderService;
    this.productService = productService;

    this.getAllWithProducts = this.getAllWithProducts.bind(this);
  }

  async getAllWithProducts(_req: Request, res: Response): Promise<void> {
    const orders = await this.orderService.getAll();
    const products = await this.productService.getProductsId();
    const productsWithId: OrderWithProducts[] = [];
    orders.forEach(async (order) => {
      products.forEach((product) => { 
        if (product.id === order.id) {
          productsWithId.push({ ...order, productsIds: product.productsIds });
        } return null;
      });
      console.log('aaaaa', productsWithId);
      return productsWithId.sort((a, b) => a.id - b.id);
    });
    res.status(200).json(productsWithId);
  }
}

export default OrderController;