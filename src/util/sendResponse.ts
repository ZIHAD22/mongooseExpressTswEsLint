import { Info } from "./sendResponse.interface";

export const sendResponse = (info: Info) => {
  const { status, success, message, data, res, error } = info;
  if (error) {
    res.status(status).json({
      success,
      message,
      error,
    });
  }

  res.status(status).json({
    success,
    message,
    data,
  });
};
