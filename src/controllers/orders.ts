import { Request, Response } from 'express';
import OrderService from '../services/orders';
import ProductService from '../services/products';

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

    const test = orders.map(async (order) => {
      const productsWithId = products.map((product) => { 
        if (product.id === order.id) {
          return { ...order, productsIds: product.productsIds };
        } return 'hji';
      });
      return productsWithId;
    });
    res.status(200).json(test);
  }
}

export default OrderController;