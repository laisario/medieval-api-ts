export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface ProductsId {
  id: number;
  productsIds: Array<number>;
}
