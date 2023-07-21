import { Router } from "express";
import { createPlaying, getAllPlaying, getPlayingById } from "../controllers/playing";

const router = Router();

router.post("/", createPlaying);
router.get("/", getAllPlaying);
router.get("/:id", getPlayingById);

export default router;
