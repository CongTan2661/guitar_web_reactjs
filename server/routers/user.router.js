const { Router } = require("express");
const { APIUser } = require("../controllers/user.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middlewares");

const userRouter = Router();

userRouter.post("/sign-up", APIUser.signUp);
userRouter.post("/sign-in", APIUser.signIn);
userRouter.get("/getInfo", authenticate, APIUser.getInfo);
userRouter.get("/verify", authenticate, authorize, APIUser.accessAdmin);

module.exports = {
  userRouter,
};
