import { z } from 'zod';

const UserNameZodValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: "First name can't be more than 20 characters" }),
  middleName: z
    .string()
    .max(20, { message: "Middle name can't be more than 20 characters" }),
  lastName: z
    .string()
    .max(20, { message: "Last name can't be more than 20 characters" }),
});

const GuardianZodValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const LocalGuardianZodValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  address: z.string(),
  contactNo: z.string(),
});

const UserZodValidationSchema = z.object({
  id: z.string(),
  name: UserNameZodValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  email: z.string().email(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])
    .optional(),
  dateOfBirth: z.string().optional(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  permanentAddress: z.string(),
  presentAddress: z.string(),
  guardian: GuardianZodValidationSchema,
  localGuardian: LocalGuardianZodValidationSchema,
  profileImg: z.string(),
  isDeleted: z.boolean().default(false),
});

export default UserZodValidationSchema;
