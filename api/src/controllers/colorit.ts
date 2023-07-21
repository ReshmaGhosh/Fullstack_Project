import { Request, Response, NextFunction } from "express";
import ColorIt from "../models/ColorIt";
import { createColorItService, getColorItByIdService, getColorItList } from "../services/colorit";

export const createColorIt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description,image } = req.body;
  const colorItInformation = new ColorIt({
    title: title,
    description: description,
    image: image,
  });
  try {
    const colorIt = await createColorItService(colorItInformation);
    res.status(201).json(colorIt);
  } catch (error) {
    next(error);
  }
};

export const getAllColorIt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const colorItList = await getColorItList();
    res.status(200).json(colorItList);
  } catch (error) {
    next(error);
  }
};

export const getColorItById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const colorItId = req.params.id;
    const colorIt = await getColorItByIdService(colorItId);
    res.status(200).json(colorIt);
  } catch (error) {
    next(error);
  }
};
