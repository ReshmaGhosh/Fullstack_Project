import { NotFoundError } from "./../helpers/apiError";
import Product, { ProductDocument } from "../models/Product";

export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return await product.save();
};

export const getProductList = async (): Promise<ProductDocument[]> => {
  return await Product.find();
};