import jwt from 'jsonwebtoken';

const JWT_SECRET = 'isNotSecret';

const createToken = (payload: { username: string, id: number }): string => {
  const token = jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
  return token;
};

export default { createToken };