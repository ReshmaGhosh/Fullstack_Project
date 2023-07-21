import { NotFoundError } from "./../helpers/apiError";
import Playing, { PlayingDocument } from "../models/Playing";

export const createPlayingService = async (
  playing: PlayingDocument
): Promise<PlayingDocument> => {
  return await playing.save();
};

export const getPlayingList = async (): Promise<PlayingDocument[]> => {
  return await Playing.find();
};

export const getPlayingByIdService = async (
  playingId: string
): Promise<PlayingDocument> => {
  const foundPlaying = await Playing.findById(playingId);
  if (!foundPlaying) {
    throw new NotFoundError(`playing ${playingId} not found`);
  }
  return foundPlaying;
};
