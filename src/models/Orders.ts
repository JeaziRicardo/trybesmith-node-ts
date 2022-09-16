import IOrder from '../interfaces/IOrder';
import connection from './connection';

async function getAll(): Promise<IOrder[]> {
  const [result] = await connection.execute(
    `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p ON p.orderId = o.id
    GROUP BY o.id
    ORDER BY o.userId;`,
  );

  return result as IOrder[];
}

export default {
  getAll,
};