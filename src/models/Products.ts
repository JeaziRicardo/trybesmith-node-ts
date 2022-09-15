import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/IProduct';

async function create({ name, amount }: IProduct): Promise<IProduct> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
    [name, amount],
  );
  return { id: insertId, name, amount };
}

async function getAll(): Promise<IProduct[]> {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return products as IProduct[];
}

export default {
  create,
  getAll,
};
