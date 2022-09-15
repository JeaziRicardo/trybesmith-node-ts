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

export default {
  create,
};
