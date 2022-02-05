const { Router } = require("express");
const { productRouter } = require("./product.router");
const { userRouter } = require("./user.router");

const rootRouter = Router();

rootRouter.use("/product", productRouter);
rootRouter.use("/login", userRouter);

module.exports = {
  rootRouter,
};
