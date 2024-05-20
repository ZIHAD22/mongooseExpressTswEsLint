import { Student } from "./student.interface";
import StudentModal from "./student.model";

const createStudentDB = async (student: Student) => {
  const data = StudentModal.create(student);
  return data;
};

const getAllStudentDB = async () => {
  const result = await StudentModal.find();
  return result;
};

export const StudentServices = {
  createStudentDB,
  getAllStudentDB,
};
