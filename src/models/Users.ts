import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/IUser';
import connection from './connection';

async function create({ username, classe, level, password }: IUser): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?);`,
    [username, classe, level, password],
  );
  return insertId;
}

export default {
  create,
};