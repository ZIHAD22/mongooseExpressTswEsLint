import express, { Application, Request, Response } from "express";
import cors from "cors";
import studentRoute from "./app/modules/Student/student.route";
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// route
app.use("/api/v1/students", studentRoute);

app.get("/", (req: Request, res: Response) => {
  res.json({
    all: "ok",
  });
});

export default app;
