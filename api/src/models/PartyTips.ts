import mongoose, { Document } from "mongoose";

export type PartyTipsDocument = Document & {
  title: string;
  description: string;
  method: string
  image: string;
};
export const PartyTipsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  method: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model<PartyTipsDocument>("partytips", PartyTipsSchema);
