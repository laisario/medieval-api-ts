import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { Product, ProductsId } from '../interfaces/products';

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

  async getProductsId(): Promise<ProductsId[]> {
    const query = `SELECT order_id AS id, JSON_ARRAYAGG(id)
    AS productsIds FROM Trybesmith.products GROUP BY order_id`;
    const [result] = await this.connection
      .execute<RowDataPacket[] >(query);
    console.log(result);

    return result as ProductsId[];
  }
}