import PartyTips, { PartyTipsDocument } from "./../models/PartyTips";
import { NotFoundError } from "./../helpers/apiError";

export const createPartyTipsService = async (
  partyTips: PartyTipsDocument
): Promise<PartyTipsDocument> => {
  return await partyTips.save();
};

export const getPartyTipsList = async (): Promise<PartyTipsDocument[]> => {
  return await PartyTips.find();
};

export const getPartyTipsByIdService = async (
  partyTipsId: string
): Promise<PartyTipsDocument> => {
  const foundPartyTips = await PartyTips.findById(partyTipsId);
  if (!foundPartyTips) {
    throw new NotFoundError(`colorit ${partyTipsId} not found`);
  }
  return foundPartyTips;
};
