import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import productsService from '../service/products.service';

async function create(req: Request, res: Response): Promise<Response> {
  const { amount, name } = req.body;

  const product = await productsService.create({ name, amount });

  return res.status(StatusCodes.CREATED).json(product);
}

async function getAll(_req: Request, res: Response): Promise<Response> {
  const products = await productsService.getAll();

  return res.status(StatusCodes.OK).json(products);
}

export default {
  create,
  getAll,
};