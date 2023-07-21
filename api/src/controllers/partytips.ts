import { Request, Response, NextFunction } from "express";
import PartyTips from "../models/PartyTips";
import { createPartyTipsService, getPartyTipsByIdService, getPartyTipsList } from "../services/partytips";

export const createPartyTips = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description,method, image } = req.body;
  const partyTipsInformation = new PartyTips({
    title: title,
    description: description,
    method: method,
    image: image,
  });
  try {
    const partyTips = await createPartyTipsService(partyTipsInformation);
    res.status(201).json(partyTips);
  } catch (error) {
    next(error);
  }
};

export const getAllPartyTips = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const partyTipsList = await getPartyTipsList();
    res.status(200).json(partyTipsList);
  } catch (error) {
    next(error);
  }
};

export const getPartyTipsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const partyTipsId = req.params.id;
    const partyTips = await getPartyTipsByIdService(partyTipsId);
    res.status(200).json(partyTips);
  } catch (error) {
    next(error);
  }
};
