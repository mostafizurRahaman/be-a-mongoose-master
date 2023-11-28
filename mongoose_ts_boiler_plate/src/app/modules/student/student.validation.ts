import Joi from 'joi';

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required(),
  fatherContactNo: Joi.string().trim().required(),
  fatherOccupation: Joi.string().trim().required(),
  motherName: Joi.string().trim().required(),
  motherContactNo: Joi.string().trim().required(),
  motherOccupation: Joi.string().trim().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
  occupation: Joi.string().trim().required(),
  contactNo: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
});

const userValidationSchema = Joi.object({
  firstName: Joi.string().trim().required().max(20),
  middleName: Joi.string().trim(),
  lastName: Joi.string().trim().required().max(20),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  name: userValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'AB+',
    'AB-',
    'B+',
    'B-',
    'O+',
    'O-',
  ),
  email: Joi.string().trim().email().required(),
  contactNo: Joi.string().trim().required(),
  emergencyContactNo: Joi.string().trim().required(),
  presentAddress: Joi.string().trim().required(),
  permanentAddress: Joi.string().trim().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().trim().required(),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .required(),
});

export default studentValidationSchema;
