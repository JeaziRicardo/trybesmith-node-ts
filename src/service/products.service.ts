import IProduct from '../interfaces/IProduct';
import Products from '../models/Products';

async function create({ name, amount }: IProduct): Promise<IProduct> {
  const product = await Products.create({ name, amount });
  return product;
}

async function getAll(): Promise<IProduct[]> {
  const products = await Products.getAll();
  return products;  
}

export default {
  create,
  getAll,
};