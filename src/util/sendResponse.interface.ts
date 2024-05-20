import { Response } from "express";

type RespondData = any;

export type Info = {
  res: Response;
  status: number;
  success: boolean;
  message: string;
  data: RespondData;
};
