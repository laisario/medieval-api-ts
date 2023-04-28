import connection from '../models/connection';
import ProductModel from '../models/product';
import { Product, ProductsId } from '../interfaces/products';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async create(newProduct: Product): Promise<Product> {
    const product = await this.model.create(newProduct);
    return product;
  }

  async getAll(): Promise<Product[]> {
    const product = await this.model.getAll();
    return product;
  }

  async getProductsId(): Promise<ProductsId[]> {
    const productsIds = await this.model.getProductsId();
    return productsIds;
  }
}

export default ProductService;