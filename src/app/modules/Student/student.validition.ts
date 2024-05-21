import { z } from "zod";

const GuardianValidationSchema = z.object({
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  motherContactNumber: z.string().optional(),
  fatherContactNumber: z.string().optional(),
});

const UserNameValidationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const studentValidationSchema = z.object({
  name: UserNameValidationSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string().date().optional(),
  email: z.string({ message: "email is required" }).email(),
  contactNumber: z.string().optional(),
  bloodGroup: z.enum(["A+", "B+", "O+", "A-", "B-", "O-"]),
  guardian: GuardianValidationSchema,
});

export { studentValidationSchema };
