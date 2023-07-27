import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  price: string;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  description: string;
};

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
  },
  image3: {
    type: String,
  },
  image4: {
    type: String,
  },
  description: {
    type: String,
    require: true,
  },
});

export default mongoose.model<ProductDocument>("product", ProductSchema);
