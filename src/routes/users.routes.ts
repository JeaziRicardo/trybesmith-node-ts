import { Router } from 'express';
import usersController from '../controller/users.controller';

const userRouter = Router();

userRouter.post('/', usersController.create);

export default userRouter;