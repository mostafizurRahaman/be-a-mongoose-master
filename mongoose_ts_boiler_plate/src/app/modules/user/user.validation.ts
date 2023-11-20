import Joi from 'joi';

const UserNameValidation = Joi.object({
  firstName: Joi.string().trim().max(20).required(),
  middleName: Joi.string().trim().max(20),
  lastName: Joi.string().trim().max(20),
});

const GuardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required(),
  fatherOccupation: Joi.string().trim().required(),
  fatherContactNo: Joi.string().trim().required(),
  motherName: Joi.string().trim().required(),
  motherOccupation: Joi.string().trim().required(),
  motherContactNo: Joi.string().trim().required(),
});

const LocalGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  occupation: Joi.string().trim().required(),
  contactNo: Joi.string().trim().required(),
});

const UserValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: UserNameValidation.required(),
  gender: Joi.string().valid('male', 'female', 'others').required(),
  email: Joi.string().trim().email().required(),
  dateOfBirth: Joi.string().trim(),
  bloodGroup: Joi.string()
    .trim()
    .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'),
  contactNo: Joi.string().trim().required(),
  emergencyContactNo: Joi.string().trim().required(),
  presentAddress: Joi.string().trim().required(),
  permanentAddress: Joi.string().trim().required(),
  guardian: GuardianValidationSchema.required(),
  localGuardian: LocalGuardianValidationSchema.required(),
  profileImg: Joi.string().trim().required(),
  isActive: Joi.string().valid('active', 'blocked'),
});

export default UserValidationSchema;
