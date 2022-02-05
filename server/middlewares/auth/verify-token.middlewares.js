const e = require("express");
const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.header("token");
  console.log(token);
  try {
    const secretKey = "guitarAD";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
    console.log(decode);
  } catch (error) {
    res.send({ message: "Bạn chưa đăng nhập" });
  }
};
const authorize = (req, res, next) => {
  try {
    const { user } = req;
    if (user.role === "ADMIN") {
      next();
    } else {
      res.status(403).send("Bạn không có quyền truy cập");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  authenticate,
  authorize,
};
