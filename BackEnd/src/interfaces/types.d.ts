import { Request, Response, NextFunction } from 'express';

export interface ExpressHandler<RequestBody = any, ResponseBody = any, Query = any, Params = any, Locals = any> {
  (req: Request<Params, ResponseBody, RequestBody, Query>, res: Response<ResponseBody, Locals>, next: NextFunction): any;
}

export interface getRequest extends Request {
  query: { page: number; size: number; search: string };
}

export interface postRequest extends Request {
  data: object;
}

export interface resFormat {
  statusCode: number;
  message: string;
  data: null | object;
}
