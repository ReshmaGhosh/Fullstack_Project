
import { Request, Response, NextFunction } from "express";
import Playing from "../models/Playing";
import { createPlayingService, getPlayingByIdService, getPlayingList } from '../services/playing';

export const createPlaying = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, method, image } = req.body;
  const playingInformation = new Playing({
    title: title,
    description: description,
    method: method,
    image: image,
  });
  try {
    const playing = await createPlayingService(playingInformation);
    res.status(201).json(playing);
  } catch (error) {
    next(error);
  }
};

export const getAllPlaying = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const playingList = await getPlayingList();
    res.status(200).json(playingList);
  } catch (error) {
    next(error);
  }
};

export const getPlayingById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const playingId = req.params.id;
    const playing = await getPlayingByIdService(playingId);
    res.status(200).json(playing);
  } catch (error) {
    next(error);
  }
};
