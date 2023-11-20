import { Request, Response } from 'express';
import { UserServices } from './user.services';
import UserValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    const { error, value } = UserValidationSchema.validate(user);

    if (error) {
      return res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.details,
      });
    }

    // call the func of services :
    const result = await UserServices.createUserIntoDB(value);

    // send res:
    res.status(200).send({
      success: true,
      message: 'User Created successfully',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

export const UserController = {
  createUser,
};
