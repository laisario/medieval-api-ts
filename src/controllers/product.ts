import { Request, Response } from 'express';
import ProductService from '../services/products';

class ProductController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;
    const product = await this.productService.create({ name, amount });
    res.status(201).json(product);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  }
}

export default ProductController;