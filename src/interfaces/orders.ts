export interface Order {
  id: number;
  userId: number;
}
export interface OrderWithProducts {
  id: number;
  productsIds: Array<number>;
  userId: number;
}

export interface OrderWithProductsAndId {
  id: number;
  productsIds: Array<number>;
  userId: number;
}