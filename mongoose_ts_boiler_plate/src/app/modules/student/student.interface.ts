import { Model, Types } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  name: TUserName;
  user: Types.ObjectId;
  password: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg: string;
  isDeleted: boolean;
};

// create instance method:

// // create instance method type :
// export type TStudentInstanceMethod = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// // create an Model which known about instance method:
// // this method get three generics parameter type : Main Interface, Record<string, never>, InstanceMethod Type

// export type TStudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   TStudentInstanceMethod
// >;

// create static method:

export interface IStudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}
