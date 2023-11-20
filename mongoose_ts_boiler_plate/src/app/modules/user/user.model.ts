import { Schema, model } from 'mongoose';

import { Guardian, LocalGuardian, UserInfo, UserName } from './user.interface';

const userNameSchema = new Schema<UserName>({
   firstName: {
     type: String,
     required: [true, 'First name is required'],
     maxLength: [20, "First name can't be more than 20 characters"],
   },
   middleName: {
     type: String,
     maxLength: [20, "Middle name can't be more than 20 characters"],
   },
   lastName: {
     type: String,
     required: [true, 'Last name is required'],
     maxLength: [20, "Last name can't be more than 20 characters"],
   },
 });
 
 const GuardianSchema = new Schema<Guardian>({
   fatherName: {
     type: String,
     trim: true,
     required: [true, 'Father name is required'],
   },
   fatherOccupation: {
     type: String,
     trim: true,
     required: [true, 'Father occupation is required'],
   },
   fatherContactNo: {
     type: String,
     trim: true,
     required: [true, 'Father contact number is required'],
   },
   motherName: {
     type: String,
     trim: true,
     required: [true, 'Mother name is required'],
   },
   motherOccupation: {
     type: String,
     trim: true,
     required: [true, 'Mother occupation is required'],
   },
   motherContactNo: {
     type: String,
     trim: true,
     required: [true, 'Mother contact number is required'],
   },
 });
 
 const LocalGuardianSchema = new Schema<LocalGuardian>({
   name: {
     type: String,
     required: [true, 'Local guardian name is required'],
     trim: true,
   },
   occupation: {
     type: String,
     required: [true, 'Local guardian occupation is required'],
     trim: true,
   },
   address: {
     type: String,
     required: [true, 'Local guardian address is required'],
     trim: true,
   },
   contactNo: {
     type: String,
     required: [true, 'Local guardian contact number is required'],
     trim: true,
   },
 });
 
 const UserSchema = new Schema<UserInfo>({
   id: {
     type: String,
     required: [true, 'ID is required'],
     unique: true,
   },
   name: {
     type: userNameSchema,
     required: [true, 'Name is required'],
   },
   gender: {
     type: String,
     enum: {
       values: ['male', 'female', 'others'],
       message: '{VALUE} is not a valid gender',
     },
     required: [true, 'Gender is required'],
   },
   email: {
     type: String,
     trim: true,
   },
   bloodGroup: {
     type: String,
     enum: {
       values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
       message: '{VALUE} is not a valid blood group',
     },
   },
   dateOfBirth: {
     type: String,
   },
   contactNo: {
     type: String,
     required: [true, 'Contact number is required'],
     trim: true,
   },
   emergencyContactNo: {
     type: String,
     required: [true, 'Emergency contact number is required'],
     trim: true,
   },
   permanentAddress: {
     type: String,
     required: [true, 'Permanent address is required'],
     trim: true,
   },
   presentAddress: {
     type: String,
     required: [true, 'Present address is required'],
     trim: true,
   },
   guardian: {
     type: GuardianSchema,
     required: [true, 'Guardian information is required'],
   },
   localGuardian: {
     type: LocalGuardianSchema,
     required: [true, 'Local guardian information is required'],
   },
   profileImg: {
     type: String,
     required: [true, 'Profile image is required'],
   },
   isActive: {
     type: String,
     enum: {
       values: ['active', 'blocked'],
       message: '{VALUE} is not a valid status',
     },
     required: [true, 'Account status is required'],
   },
 });
 
const UserModel = model('User', UserSchema);

export default UserModel;
