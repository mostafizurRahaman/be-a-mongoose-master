import { Schema, model } from 'mongoose';
import {
  IStudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  // TStudentInstanceMethod,
  // TStudentModel,
  TUserName,
} from './student.interface';

// import validator from 'validator'
const UserSchema = new Schema<TUserName>({
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

const GuardianSchema = new Schema<TGuardian>({
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

const LocalGuardianSchema = new Schema<TLocalGuardian>({
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

const studentSchema = new Schema<TStudent, IStudentModel>({
  id: {
    type: String,
    trim: true,
    required: [true, 'ID is required'],
    // unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User is required'],
    unique: true,
    ref: 'User',
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

  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// create an instance method:
// studentSchema.methods.isUserExists = async function (id: string) {
//   return Student.findOne({ id });
// };

// create an static methods:
studentSchema.statics.isUserExists = async function (id: string) {
  const isExist = await Student.findOne({ id });
  return isExist;
};

// pre  hooks all before saving data :
/* studentSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // bcrypt password:
  user.password = await bcrypt.hash(
    user.password,
    Number(configs.bcrypt_solt_rounds),
  );

  next();
}); */

// pre hook for query middleware:
studentSchema.pre('find', async function (next) {
  // write query:
  this.find({ isDeleted: { $ne: true } });
  next();
});

// pre hook for query middleware : findOne()

studentSchema.pre('findOne', async function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

// post  hooks documents middleware:

/* studentSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
}); */

// pre hooks for query middleware:
studentSchema.pre('find', async function (next) {
  // this.find({ isDeleted: { $ne: true } });
  next();
});

// pre hooks for aggregation middleware :
studentSchema.pre('aggregate', async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const Student = model<TStudent, IStudentModel>('Student', studentSchema);

export default Student;
