// server here
import Express from "express";
import cors from "cors";
import passport from "passport";

import productRouter from "./routes/products";
import userRouter from "./routes/users";
import orderRouter from "./routes/order";
import colorItRouter from "./routes/colorit";
import partyTipsRouter from "./routes/partytips";
import playingRouter from "./routes/playing";
import apiErrorHandler from "./middlewares/apiErrorHandler";
import { jwtStrategy } from "./config/passport";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy);

// routes
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/colorit", colorItRouter);
app.use("/partytips", partyTipsRouter);
app.use("/playing", playingRouter);

// handler error here
app.use(apiErrorHandler);

export default app;
