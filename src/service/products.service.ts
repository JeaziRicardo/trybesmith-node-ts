import IProduct from '../interfaces/IProduct';
import Products from '../models/Products';

async function create({ name, amount }: IProduct): Promise<IProduct> {
  const product = await Products.create({ name, amount });
  return product;
}

export default {
  create,
};