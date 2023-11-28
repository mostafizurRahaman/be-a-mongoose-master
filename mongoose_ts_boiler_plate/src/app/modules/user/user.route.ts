import express, { Router } from 'express';
import { UserControllers } from './user.controller';

const router: Router = express.Router();

router.route('/create-student').post(UserControllers.createStudent);

export const userRouter = router;
