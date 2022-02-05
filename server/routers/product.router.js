const { Router } = require("express");
const { APIProduct } = require("../controllers/product.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middlewares");
const { upLoadImgMainAndList } = require("../middlewares/uploadImgProduct");

const productRouter = Router();

// productRouter.post("/", upLoadImgMainAndList(), APIProduct.createProduct);
productRouter.post("/", upLoadImgMainAndList(), APIProduct.createProduct);
productRouter.get("/", APIProduct.getProductList);
productRouter.get("/:id", APIProduct.getProductById);
productRouter.put("/:id", upLoadImgMainAndList(), APIProduct.updateProduct);
productRouter.delete("/:id", authenticate, authorize, APIProduct.deleteProduct);
module.exports = {
  productRouter,
};
