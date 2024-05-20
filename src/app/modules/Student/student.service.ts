import { Student } from "./student.interface";
import StudentModal from "./student.model";

const createStudentDB = async (student: Student) => {
  const data = StudentModal.create(student);
  return data;
};

export const StudentServices = {
  createStudentDB,
};
