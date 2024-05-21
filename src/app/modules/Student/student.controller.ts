import { Request, Response } from "express";
import { StudentServices } from "../Student/student.service";
import { sendResponse } from "../../../util/sendResponse";
import { HydratedDocument } from "mongoose";
import { Student } from "./student.interface";
import { studentValidationSchema } from "./student.validition";
import { Document } from "mongoose";
const createStudent = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    const validateData = studentValidationSchema.parse(data);

    const result: Document = await StudentServices.createStudentDB(
      validateData
    );
    sendResponse({
      res,
      status: 200,
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    sendResponse({
      res,
      status: 500,
      success: false,
      message: "something is went wrong",
      error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const data: HydratedDocument<Student>[] =
      await StudentServices.getAllStudentDB();
    // res.status(200).json({ success: true, message: "All Student", data: data });
    sendResponse({
      res,
      status: 200,
      success: true,
      message: "All Student",
      data,
    });
  } catch (e) {
    console.log(e);
  }
};

export { createStudent, getAllStudent };
