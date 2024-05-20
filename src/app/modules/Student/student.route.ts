import { Router } from "express";
import { StudentControllers } from "./student.controller";

const studentRoute = Router();

studentRoute.post("/create", StudentControllers.createStudent);

export default studentRoute;
