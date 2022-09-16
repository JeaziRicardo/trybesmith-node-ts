import Users from '../models/Users';
import tokenHelper from '../helpers/tokenHelper';
import IUser from '../interfaces/IUser';
import IToken from '../interfaces/IToken';

async function create({ username, classe, level, password }: IUser): Promise<IToken> {
  const insertId = await Users.create({ username, classe, level, password });
  const token = tokenHelper.createToken({ username, id: insertId });
  return { token };
}

export default {
  create,
};