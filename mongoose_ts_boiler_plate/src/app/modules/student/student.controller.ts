import { Request, Response } from 'express';
import { StudentServices } from './student.services';
// import studentValidationSchema from './student.validation';
// import UserZodValidationSchema from './student.zod.validation';

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     // get body data:
//     const { student: studentData } = req.body;

//     // Joi validation data :
//     // const { error } = studentValidationSchema.validate(student);
//     // if (error) {
//     //   return res.status(500).send({
//     //     success: false,
//     //     message: 'something went wrong',
//     //     error: error.details,
//     //   });
//     // }

//     // // zod validation data:
//     // const zodParseData = UserZodValidationSchema.parse(studentData);
//     // // call the service func to save data on database :
//     const student = await StudentServices.createStudentIntoDB(studentData);

//     // send  res:
//     res.status(200).send({
//       success: true,
//       message: 'Student is created successfully',
//       data: student,
//     });
//   } catch (err: any) {
//     res.status(500).send({
//       success: false,
//       message: err.message,
//       error: err,
//     });
//   }
// };

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Students found successfully',
      data: students,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message,
      error: err,
    });
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
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

const deleteStudentById = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentByIdFromDB(studentId);

    res.status(200).send({
      status: true,
      message: 'Student Deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

// get student with Aggregation :
const getStudentsWithAggregation = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDBWithAggregation();
    res.status(200).send({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message,
      error: err,
    });
  }
};
export const StudentController = {
  getAllStudents,
  getStudentById,
  deleteStudentById,
  getStudentsWithAggregation,
};
