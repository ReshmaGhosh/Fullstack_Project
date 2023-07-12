import { createUser,logInWithPassword, updateUserController } from './../controllers/users';
import { Router } from "express";
import passport from "passport"


const router = Router();

// create user
router.post("/", createUser);
router.post("/login", logInWithPassword);
router.put("/:id",passport.authenticate("jwt",{session: false}), updateUserController);

export default router;
