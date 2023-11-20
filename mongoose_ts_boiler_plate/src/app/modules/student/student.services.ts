import { Student } from './student.interface';
import StudentModel from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// get students:
const getAllStudentFromDB = async () => {
  const students = await StudentModel.find();

  return students;
};

// get single student with student id:
const getStudentByIdFromDB = async (id: string) => {
  const student = await StudentModel.findOne({ id });
  return student;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getStudentByIdFromDB,
};
