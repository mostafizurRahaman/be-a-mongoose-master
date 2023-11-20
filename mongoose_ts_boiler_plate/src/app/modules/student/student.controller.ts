import { Request, Response } from 'express';
import { StudentServices } from './student.services';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // get body data:
    const { student } = req.body;

    // validate data :
    const { error } = studentValidationSchema.validate(student);
    if (error) {
      return res.status(500).send({
        success: false,
        message: 'something went wrong',
        error: error.details,
      });
    }
    // call the service func to save data on database :
    const result = await StudentServices.createStudentIntoDB(student);

    // send  res:
    res.status(200).send({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Student didn't created successfully  ",
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Students found successfully',
      data: students,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    // get  id:
    const { studentId } = req.params;

    const student = await StudentServices.getStudentByIdFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student found successfully',
      data: student,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getStudentById,
};
