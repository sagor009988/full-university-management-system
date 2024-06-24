import { StudentModel } from './student.model';
//get all
const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

//get single Student
const getSingleStudentsFromDb = async (id: string) => {
  // const result = await StudentModel.findOne({ id });
  const result = await StudentModel.aggregate([{ $match: { id: id } }]);
  return result;
};

//delete a data
const deleteStudentFromDb = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
  getAllStudentsFromDb,
  getSingleStudentsFromDb,
  deleteStudentFromDb,
};
