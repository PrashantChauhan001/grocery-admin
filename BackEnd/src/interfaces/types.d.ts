import { Request, Response, NextFunction } from 'express';

export interface ExpressHandler<RequestBody = any, ResponseBody = any, Query = any, Params = any, Locals = any> {
  (req: Request<Params, ResponseBody, RequestBody, Query>, res: Response<ResponseBody, Locals>, next: NextFunction): any;
}
