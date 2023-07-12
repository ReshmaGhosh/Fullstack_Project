// server here
import Express from "express";
import cors from "cors";

import productRouter from "./routes/products";
import userRouter from "./routes/users";
import apiErrorHandler from "./middlewares/apiErrorHandler";
import { jwtStrategy } from "./config/passport";
import passport from "passport";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy);

// routes
app.use("/products", productRouter);
app.use("/users", userRouter);

// handler error here
app.use(apiErrorHandler);

export default app;
