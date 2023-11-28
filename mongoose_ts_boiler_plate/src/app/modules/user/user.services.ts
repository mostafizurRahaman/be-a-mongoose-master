import { TUser } from './user.interface';
import configs from '../../configs';
import User from './user.model';
import { TStudent } from '../student/student.interface';
import Student from '../student/student.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  // if password not given use default password:
  userData.password = password || (configs.default_password as string);

  // set  role student:
  userData.role = 'student';

  // set manuallly generated id:
  userData.id = '203000001';

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    // create new student:

    const newStudent = await Student.create(studentData);

    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
