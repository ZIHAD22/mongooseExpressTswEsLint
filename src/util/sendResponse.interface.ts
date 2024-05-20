import { Response } from "express";
import { Document } from "mongoose";

export type Info = {
  res: Response;
  status: number;
  success: boolean;
  message: string;
  data: Document;
};
