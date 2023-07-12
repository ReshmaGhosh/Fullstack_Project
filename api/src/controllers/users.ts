import { Request, Response, Router, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/User";
import UserServices from "../services/users";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userInformation = new User({
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await UserServices.createUserService(userInformation);
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const logInWithPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = await UserServices.findUserByEmail(req.body.email);
    if (!userData) {
      res.status(403).json({ message: "user do not have account" });
      return;
    }
    const token = jwt.sign(
        {
       email: userData.email,
       id: userData._id, 
    },
    JWT_SECRET,
    {expiresIn: "1h"}
    );

    res.json({userData, token});

  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const update = req.body;
  const userId = req.params.id;
  const updatedUser = await UserServices.updateUser(userId, update);
  res.json(updatedUser);
};