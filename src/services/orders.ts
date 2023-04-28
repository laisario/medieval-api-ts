import connection from '../models/connection';
import OrderModel from '../models/orders';
import { Order } from '../interfaces/orders';

class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default OrderService;