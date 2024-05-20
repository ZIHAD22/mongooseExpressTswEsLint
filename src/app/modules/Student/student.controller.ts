import { Request, Response } from "express";
import { StudentServices } from "../Student/student.service";
import { sendResponse } from "../../../util/sendResponse";
const createStudent = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await StudentServices.createStudentDB(data);
  sendResponse({
    res,
    status: 200,
    success: true,
    message: "student created successfully",
    data: result,
  });
};

export const StudentControllers = {
  createStudent,
};
