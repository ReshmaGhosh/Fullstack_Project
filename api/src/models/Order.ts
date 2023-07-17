import mongoose, { Document } from "mongoose";

import { ProductDocument, ProductSchema } from "./Product";

export type OrderDocument = Document & {
  createdAt: Date;
  productList: ProductDocument[];
  userId: string;
};

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },

  productList: [ProductSchema],

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model<OrderDocument>("order", OrderSchema);
