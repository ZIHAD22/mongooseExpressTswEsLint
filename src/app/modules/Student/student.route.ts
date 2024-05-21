import { Router } from "express";
import { createStudent, getAllStudent } from "./student.controller";

const studentRoute = Router();

studentRoute.post("/create", createStudent);
studentRoute.get("/", getAllStudent);

export default studentRoute;
