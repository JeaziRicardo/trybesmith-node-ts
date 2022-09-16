import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import usersService from '../service/users.service';

async function create(req: Request, res: Response): Promise<Response> {
  const { username, classe, level, password } = req.body;

  const token = await usersService.create({ username, classe, level, password });

  return res.status(StatusCodes.CREATED).json(token);
}

export default {
  create,
};