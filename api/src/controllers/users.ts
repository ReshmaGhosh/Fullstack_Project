import { Request, Response, Router } from "express";

import User from "../models/User";
import UserServices from "../services/users";

export const createUser = async (req: Request, res: Response) => {
  const userInformation = new User({
    email: req.body.email,
    password: req.body.password,
  });
  const newUser = await UserServices.createUserService(userInformation);
  res.status(200).json(newUser);
};
