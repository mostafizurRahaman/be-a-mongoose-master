import { TStudent } from './student.interface';
import Student from './student.model';

// const createStudentIntoDB = async (studentData: TStudent) => {
//   if (await Student.isUserExists(studentData.id)) {
//     throw new Error('User Already Exists');
//   }
//   const result = await Student.create(studentData);
//   return result;

//   /**
//    * @instance method used here:

//   const student = new Student(studentData);

//   if (await student.isUserExists(student.id)) {
//     throw new Error('User Already Exists');
//   }

//   const result = await student.save();

//   return result;

//   */
// };

// get students:
const getAllStudentFromDB = async () => {
  const students = await Student.find();

  return students;
};

// get data from db with aggregation:
const getAllStudentFromDBWithAggregation = async () => {
  const students = await Student.aggregate([
    // stage 1:
    { $match: {} },
  ]);

  return students;
};

// get single student with student id:
const getStudentByIdFromDB = async (id: string) => {
  const student = await Student.findOne({ id });
  return student;
};

// delete single documents:
const deleteStudentByIdFromDB = async (id: string) => {
  const result = await Student.updateOne(
    { id },
    {
      $set: {
        isDeleted: true,
      },
    },
  );

  return result;
};

export const StudentServices = {
  getAllStudentFromDB,
  getStudentByIdFromDB,
  deleteStudentByIdFromDB,
  getAllStudentFromDBWithAggregation,
};
