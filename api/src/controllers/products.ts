
import { Request, Response, NextFunction } from "express";

import Product from "../models/Product";
import {
  createProductService,
  getProductByIdService,
  getProductList,
} from "../services/products";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, price, image, image2, image3, image4, description } = req.body;
  const productInformation = new Product({
    title: title,
    price: price,
    image: image,
    image2: image2,
    image3: image3,
    image4: image4,
    description: description,
  });
  try {
    const product = await createProductService(productInformation);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productList = await getProductList();
    res.status(200).json(productList);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const product = await getProductByIdService(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};
