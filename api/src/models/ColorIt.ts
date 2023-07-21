import mongoose, { Document } from "mongoose";

export type ColorItDocument = Document & {
  title: string;
  description: string;
  image: string;
};
export const ColotItSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model<ColorItDocument>("colorit", ColotItSchema);
