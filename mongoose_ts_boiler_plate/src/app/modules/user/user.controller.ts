import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.services';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    const student = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    // send  res:
    res.status(200).send({
      success: true,
      message: 'Student is created successfully',
      data: student,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
