import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  email: string;
  password: number;
};

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);
