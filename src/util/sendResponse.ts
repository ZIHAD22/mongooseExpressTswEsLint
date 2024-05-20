import { Info } from "./sendResponse.interface";

export const sendResponse = (info: Info) => {
  const { status, success, message, data, res } = info;
  return res.status(status).json({
    success,
    message,
    data,
  });
};
