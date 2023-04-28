import { Pool, RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces/orders';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const query = 'SELECT * FROM Trybesmith.orders';
    const [result] = await this.connection
      .execute<RowDataPacket[]>(query);
    const productsFormated = result
      .map((product) => ({ id: product.id, userId: product.user_id }));
    return productsFormated as Order[];
  }
}
