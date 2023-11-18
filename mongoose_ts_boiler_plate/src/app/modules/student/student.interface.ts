import { LocalGuardian } from './student.interface';
export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type UserName = {
  firstName: string
  lastName: string
  middleName: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}
export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth?: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian, 
}
