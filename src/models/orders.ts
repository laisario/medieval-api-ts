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
    return result as Order[];
  }
}
