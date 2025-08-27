import { NextFunction, Request, Response } from 'express';
import asyncWrap from 'express-async-wrapper';
import Joi from 'joi';
import { ErrorHandler } from './error';
import RESPONSE_CODES from '@src/constants/response.constants';
import { REQ_KEY } from '@src/constants/route.constants';

const verifySchema = (schema: Joi.AnySchema, reqKey: REQ_KEY.BODY | REQ_KEY.QUERY | REQ_KEY.PARAMS) =>
  asyncWrap(async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[reqKey]);
    if (error) {
      throw new ErrorHandler(RESPONSE_CODES[400].code, error.message);
    } else {
      req[reqKey] = value;
      next();
    }
  });

export { verifySchema };
