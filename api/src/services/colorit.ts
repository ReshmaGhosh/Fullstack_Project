import ColorIt,{ ColorItDocument } from './../models/ColorIt';
import { NotFoundError } from "./../helpers/apiError";

export const createColorItService = async (
  colorIt: ColorItDocument
): Promise<ColorItDocument> => {
  return await colorIt.save();
};

export const getColorItList = async (): Promise<ColorItDocument[]> => {
  return await ColorIt.find();
};

export const getColorItByIdService = async (
  colorItId: string
): Promise<ColorItDocument> => {

  const foundColorIt = await ColorIt.findById(colorItId);
  if (!foundColorIt) {
    throw new NotFoundError(`colorit ${colorItId} not found`);
  }
  return foundColorIt;
};
