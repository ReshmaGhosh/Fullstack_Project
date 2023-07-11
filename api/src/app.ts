// server here
import Express from "express";
import cors from "cors";

import productRouter from "./routes/products";
import userRouter from "./routes/users";
import apiErrorHandler from "./middlewares/apiErrorHandler";

const app = Express();

app.use(Express.json());
app.use(cors());

// routes
app.use("/products", productRouter);
app.use("/users", userRouter);

// handler error here
app.use(apiErrorHandler);

export default app;

