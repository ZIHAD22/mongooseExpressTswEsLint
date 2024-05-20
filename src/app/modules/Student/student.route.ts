import { Router } from "express";
import { StudentControllers } from "./student.controller";

const studentRoute = Router();

studentRoute.post("/create", StudentControllers.createStudent);
studentRoute.get("/", StudentControllers.getAllStudent);

export default studentRoute;
