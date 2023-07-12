import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import UserServices from "../services/users";

import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    const userEmail = payload.email;
    const foundUser = await UserServices.findUserByEmail(userEmail);
    done(null, foundUser);
    // next()
  }
);
 
//my token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbGx5MUBnbWFpbC5jb20iLCJpZCI6IjY0YWVhYWQwODc1ZDI0M2Y4NTNhOWQ5ZSIsImlhdCI6MTY4OTE2OTEwMiwiZXhwIjoxNjg5MTcyNzAyfQ.LNFiAbhoiV3pI7aPXscN9MZNOjyFVrRVl5aF7rrhbY4