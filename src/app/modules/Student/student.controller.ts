import { Request, Response } from "express";
import { StudentServices } from "../Student/student.service";
import { sendResponse } from "../../../util/sendResponse";
const createStudent = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await StudentServices.createStudentDB(data);
    sendResponse({
      res,
      status: 200,
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const data = await StudentServices.getAllStudentDB();
    res.status(200).json({ success: true, message: "All Student", data: data });
  } catch (e) {
    console.log(e);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
};
