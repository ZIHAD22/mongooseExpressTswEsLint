export type Guardian = {
  fatherName: string;
  motherName: string;
  fatherContactNumber: string;
  motherContactNumber: string;
};

export type UserName = {
  fistName: string;
  lastName: string;
};

export type Student = {
  name: UserName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  guardian: Guardian;
  bloodGroup?: "A+" | "B+" | "O+" | "A-" | "B-" | "O-";
};
