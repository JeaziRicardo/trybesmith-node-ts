import IOrder from '../interfaces/IOrder';
import Orders from '../models/Orders';

async function getAll(): Promise<IOrder[]> {
  const orders = await Orders.getAll();
  return orders;
}

export default {
  getAll,
};