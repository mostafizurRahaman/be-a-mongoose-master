import { Request, Response } from 'express';
import { UserServices } from './user.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    const student = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    console.log(student);

    // send  res:
    res.status(200).send({
      success: true,
      message: 'Student is created successfully',
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

export const UserControllers = {
  createStudent,
};
