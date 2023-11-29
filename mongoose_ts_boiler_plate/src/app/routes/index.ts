import express from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { userRouter } from '../modules/user/user.route';

const router = express.Router();

// router.use('/students', StudentRoutes);
// router.use('/users', userRouter);

const modulesRoute = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: userRouter,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));

export default router;
