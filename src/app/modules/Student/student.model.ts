import { Schema, model } from "mongoose";
import { Guardian, Student, UserName } from "./student.interface";

const guardian = new Schema<Guardian>({
  fatherName: String,
  motherName: String,
  motherContactNumber: String,
  fatherContactNumber: String,
});

const name = new Schema<UserName>({
  fistName: String,
  lastName: String,
});

const studentSchema = new Schema<Student>({
  name,
  gender: ["male", "female"],
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: { type: String },
  bloodGroup: ["A+", "B+", "O+", "A-", "B-", "O-"],
  guardian,
});

const StudentModal = model<Student>("Student", studentSchema);

export default StudentModal;
