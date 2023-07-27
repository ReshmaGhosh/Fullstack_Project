
import { Router } from "express";
import passport from "passport";

import {
  createOrderController,
  getOrderListByUserId,
} from "../controllers/orders";

const router = Router();

router.post("/:userId", createOrderController);

router.get("/:id",getOrderListByUserId);

export default router;
