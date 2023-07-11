import { Request, Response, NextFunction } from "express";

import orderServices from "../services/orders";
import Order from "../models/Order";

const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = new Order({
      userId: req.params.userId,
      productList: req.body.productList,
    });
    const order = await orderServices.createOrder(newOrder);
    res.json(order);
  } catch (error) {
    next(error);
  }
};
