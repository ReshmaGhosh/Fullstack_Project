import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
  address: string;
  dob: string;
  phone: string;
  country: string;
  city: string;
  state: string;
};

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    
  },

  address: {
    type: String,
    
  },
  role: {
    type: String,
    default: "user",
  },
  dob: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  phone: {
    type: String,
  },
});

export default mongoose.model<UserDocument>("user", UserSchema);
