import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ordersService from '../service/orders.service';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const orders = await ordersService.getAll();

  return res.status(StatusCodes.OK).json(orders);
}

export default {
  getAll,
};