import { Router } from "express";
import { createColorIt, getAllColorIt, getColorItById } from "../controllers/colorit";

const router = Router();

router.post("/", createColorIt);
router.get("/", getAllColorIt);
router.get("/:id", getColorItById);

export default router;
