import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDb = async (payload: TStudent) => {
  const result = await StudentModel.create(payload); //built in ststic method

  return result;
};

//get all
const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

//get single Student
const getSingleStudentsFromDb = async (id: string) => {
  // const result = await StudentModel.findOne({ id });
  const result=await StudentModel.aggregate([
    {$match:{id:id}}
  ])
  return result;
};

//delete a data
const deleteStudentFromDb = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  createStudentIntoDb,
  getAllStudentsFromDb,
  getSingleStudentsFromDb,
  deleteStudentFromDb,
};
