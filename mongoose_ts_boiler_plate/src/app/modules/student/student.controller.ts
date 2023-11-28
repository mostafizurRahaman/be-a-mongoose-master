import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.services';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const students = await StudentServices.getAllStudentFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrieved successfully',
      data: students,
    });
  } catch (err) {
    next(err);
  }
};

const getStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // get  id:
    const { studentId } = req.params;

    const student = await StudentServices.getStudentByIdFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student retrieved successfully',
      data: student,
    });
  } catch (err) {
    next();
  }
};

const deleteStudentById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentByIdFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// get student with Aggregation :
const getStudentsWithAggregation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDBWithAggregation();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Retrieved successfully with aggregation',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const StudentController = {
  getAllStudents,
  getStudentById,
  deleteStudentById,
  getStudentsWithAggregation,
};
