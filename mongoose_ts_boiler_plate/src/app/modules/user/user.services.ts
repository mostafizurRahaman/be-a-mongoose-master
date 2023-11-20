import { UserInfo } from './user.interface';
import UserModel from './user.model';

const createUserIntoDB = async (user: UserInfo) => {
  const result = await UserModel.create(user);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
