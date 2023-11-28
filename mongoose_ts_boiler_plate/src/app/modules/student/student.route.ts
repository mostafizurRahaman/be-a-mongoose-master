import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getAllStudents);

router.get('/aggregate', StudentController.getStudentsWithAggregation);

router.get('/:studentId', StudentController.getStudentById);

router.delete('/:studentId', StudentController.deleteStudentById);

export const StudentRoutes = router;
