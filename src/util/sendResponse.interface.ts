import { Response } from "express";

type ResponseData = any;
type ResponseError = any;

type infoBase = {
  res: Response;
  status: number;
  success: boolean;
  message: string;
};

type infoWithError = infoBase & {
  error: ResponseError;
  data?: never; // this ensure "data" is not present when "error" is present
};
type infoWithData = infoBase & {
  data: ResponseData;
  error?: never; // this ensure "error" is not present when "data" is present
};

type Info = infoWithData | infoWithError;

export { Info };
