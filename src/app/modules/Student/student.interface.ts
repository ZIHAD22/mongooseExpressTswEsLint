type Guardian = {
  fatherName?: string;
  motherName?: string;
  fatherContactNumber?: string;
  motherContactNumber?: string;
};

type UserName = {
  firstName: string;
  lastName: string;
};

type Student = {
  name: UserName;
  gender: "male" | "female";
  dateOfBirth?: string;
  email: string;
  contactNumber?: string;
  guardian: Guardian;
  bloodGroup?: "A+" | "B+" | "O+" | "A-" | "B-" | "O-";
};

export { Student, UserName, Guardian };
