import { Router } from "express";
import { createPartyTips, getAllPartyTips, getPartyTipsById } from "../controllers/partytips";

const router = Router();

router.post("/", createPartyTips);
router.get("/", getAllPartyTips);
router.get("/:id", getPartyTipsById);

export default router;
