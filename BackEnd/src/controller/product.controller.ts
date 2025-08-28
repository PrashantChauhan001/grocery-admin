import RESPONSE_CODES from '@src/constants/response.constants';
import { getResponse } from '@src/helpers/common.helpers';
import { ErrorHandler } from '@src/helpers/error';
import { productColumnNames } from '@src/interfaces/modelTypes/products';
import { getRequest, postRequest } from '@src/interfaces/types';
import { Product } from '@src/models';
import { Request, Response } from 'express';
import asyncWrap from 'express-async-wrapper';
import { FindAndCountOptions, Op } from 'sequelize';

const getProducts = asyncWrap(async (req: getRequest, res: Response) => {
  const { page, search, size } = req.query;

  const queryObj: FindAndCountOptions = {
    limit: size || 10,
    offset: page ? (page - 1) * size : 0,
    order: [
      [productColumnNames.ename, 'ASC'],
      [productColumnNames.gname, 'ASC'],
      [productColumnNames.hname, 'ASC'],
    ],
  };

  if (search) {
    queryObj.where = {
      [Op.or]: {
        [productColumnNames.ename]: { [Op.substring]: search },
        [productColumnNames.gname]: { [Op.substring]: search },
        [productColumnNames.hname]: { [Op.substring]: search },
      },
    };
  }

  const { count, rows: products } = await Product.findAndCountAll(queryObj);

  res
    .status(RESPONSE_CODES[200].code)
    .json(getResponse({ status: RESPONSE_CODES[200], data: { products, totalCount: count, page: page || 1, size: queryObj.limit } }));
});

const getProduct = asyncWrap(async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findOne({ where: { [productColumnNames.id]: id } });
  if (product) {
    res.status(RESPONSE_CODES[200].code).json(getResponse({ status: RESPONSE_CODES[200], data: product }));
  } else throw new ErrorHandler(RESPONSE_CODES[404].code, 'Product Not found.');
});

const addProduct = asyncWrap(async (req: postRequest, res: Response) => {
  const product = await Product.create(req.body);
  res.status(RESPONSE_CODES[201].code).json(getResponse({ status: RESPONSE_CODES[201], data: product.dataValues }));
});

const updateProduct = asyncWrap(async (req: postRequest, res: Response) => {
  const { id, ...rest } = req.body;
  const product = await Product.findOne({ where: { [productColumnNames.id]: id } });
  if (product) {
    Object.keys(rest).forEach((key: string) => {
      (product as any)[key] = (rest as any)[key];
    });
    await product.save();
    res
      .status(RESPONSE_CODES[200].code)
      .json(getResponse({ status: RESPONSE_CODES[201], data: product.dataValues, message: 'Product updated successfully.' }));
  } else throw new ErrorHandler(RESPONSE_CODES[404].code, 'Product Not found.');
});

const deleteProduct = asyncWrap(async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findOne({ where: { [productColumnNames.id]: id } });
  if (product) {
    await product.destroy();
    res.status(RESPONSE_CODES[200].code).json(getResponse({ status: RESPONSE_CODES[200], data: product.dataValues }));
  } else throw new ErrorHandler(RESPONSE_CODES[404].code, 'Product Not found.');
});

export { getProducts, addProduct, getProduct, updateProduct, deleteProduct };
