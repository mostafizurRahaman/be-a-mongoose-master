import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';
// import validator from 'validator'
const UserSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxLength: [20, "First name can't be more then 20 characters"],
    // validate: {
    //   validator: function (value: string) {
    //     const capitalizeFirstName =
    //       value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    //     return capitalizeFirstName === value
    //   },
    // },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required'],
    maxLength: [20, "Last name can't be more than 20 characters "],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid Last Name',
    // },
  },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father name is required'],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Father contact number is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father occupation is required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother name is required'],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Mother contact number is required'],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Mother occupation is required'],
  },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, 'Local guardian name is required'],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, 'Local guardian occupation is required'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Local guardian contact number is required'],
  },
  address: {
    type: String,
    trim: true,
    required: [true, 'Local guardian address is required'],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    trim: true,
    required: [true, 'ID is required'],
    unique: true,
  },
  name: {
    type: UserSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Email address is required'],
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: "{VALUE} isn't an email",
    // },
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNo: {
    type: String,
    trim: true,
    required: [true, 'Emergency contact number is required'],
  },
  presentAddress: {
    type: String,
    trim: true,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    trim: true,
    required: [true, 'Permanent address is required'],
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
    trim: true,
    required: [true, 'Profile image is required'],
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status',
    },
    default: 'active',
    required: [true, 'Account status is required'],
  },
});

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;
