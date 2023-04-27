import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(newProduct: Product): Promise<Product> {
    const { name, amount } = newProduct;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { ...newProduct, id: insertId };
  }

  async getAll(): Promise<Product[]> {
    const [products] = await this.connection
      .execute('SELECT * FROM Trybesmith.products');
    return products as Product[];
  }
}